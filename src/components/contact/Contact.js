import React, { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Mail,LoginStatus,Fullname,LoginModal,Name } from '../../Store';
import SelectSearch ,{fuzzySearch} from 'react-select-search';

import "./contact.css";

export function Contact() {
    const { t, i18n } = useTranslation();
    const [mail, setMail] = useContext(Mail);
    const [fullname, setFullName] = useContext(Fullname);
    const [loginstate, setLogin] = useContext(LoginModal);
    const [loginStatus, setLoginStatus] = useContext(LoginStatus);
    const [name, setName] = useContext(Name);
   
    const [number,setNumber] = useState();
    const [country,setCountry] = useState();
    const [title,setTitle] = useState();
    const [message,setMessage] = useState();

    const options = [
        { value: "TR", name: "Turkey" },
        { value: "US", name: "United States of America" },
        { value: "GB", name: "United Kingdom" },
        { value: "DE", name: "Germany" },
        { value: "SE", name: "Sweden" },
        { value: "KE", name: "Kenya" },
        { value: "BR", name: "Brazil" },
        { value: "ZW", name: "Zimbabwe" }
    ];

    function sendRequest() {
        var data = {
            "name": name,
            "email": mail,
            "phonenumber": number,
            "country_code": country,
            "text": message
        }
        console.log(data)
    }
   
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h1> {t('Contact.1')}</h1>
                    <div className="form-group">
                        <label>{t('Fullname.1')}</label>
                        <input type="text" className="form-control" placeholder={t('Enterfullname.1')} value={name} onChange={(e) => setName(e.target.value)} ></input>
                    </div>
                    <div className="form-group">
                        <label>{t('Email.1')}</label>
                        <input type="mail" className="form-control" placeholder={t('Entermail.1')} value={mail} onChange={(e) => setMail(e.target.value)} ></input>
                    </div>
                    <div className="form-group">
                        <label>{t('Number.1')}</label>
                        <input type="number" maxLength={11} className="form-control" placeholder={t('Enternumber.1')} value={number} onChange={(e) => setNumber(e.target.value)}></input>
                    </div>
                   
                    <div className="form-group">
                        <label>{t('Title.1')}</label>
                        <input type="text" className="form-control" placeholder={t('Title.1')} value={title} onChange={(e) => setTitle(e.target.value)} ></input>
                    </div>
                    <div className="form-group">
                    <label>{t('Countrytitle.1')}</label>
                        <SelectSearch
                            options={options}
                            value={options.value}
                            onChange={(value) => setCountry(value)}
                            search
                            filterOptions = {fuzzySearch}
                            placeholder={t('Country.1')}
                            
                        />

                    </div>
                    <div className="form-group">
                        <label>{t('Message.1')}</label>
                        <input type="textarea" name="textValue" className="form-control" placeholder={t('Entermessage.1')} value={message}  onChange={(e) => setMessage(e.target.value)}></input>
                    </div>
                    <button type="button" className="btn btn-primary btn-block"  onClick={sendRequest}>{t('Send.1')}</button>
                </form>
            </div>
        </div>
    )
}