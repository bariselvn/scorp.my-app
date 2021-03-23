import React, { useContext } from 'react'
import { userData } from '../../data/userdata'
import { useTranslation } from 'react-i18next';
import { Fullname, Mail ,Password ,LoginStatus ,LoginModal , Name} from '../../Store';





import '../../i18next'
function LoginForm() {

    const [mail, setMail] = useContext(Mail);
    const [fullname, setFullname] = useContext(Fullname);
    const [loginstate, setLogin] = useContext(LoginModal);
    const [password, setPassword] = useContext(Password);
    const [loginStatus, setLoginStatus] = useContext(LoginStatus);
    const [name, setName] = useContext(Name);
    const { t, i18n } = useTranslation();

    function login() {
        userData.map((data, key) => {
            if (data.mail == mail && data.password == password) {
                setLoginStatus(true);
                setFullname(data.fullname)
                setName(data.fullname)
                setLogin(false);
                return;
            } else {
                console.log(data.mail+ "   adresi bulunamadı.");

            }

        })
    }
    return (
        <div className="modal-wrapper">
            <div className="modal-inner">
                <form>
                    <h3>{t('SignIn.1')}</h3>

                    <div className="form-group">
                        <label>{t('Email.1')}s</label>
                        <input type="email" className="form-control" placeholder={t('Entermail.1')} value={mail} onChange={(e) => setMail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>{t('Password.1')}</label>
                        <input type="password" className="form-control" placeholder={t('Enterpassword.1')} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">{t('Rememberme.1')}</label>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-block" onClick={login}>{t('Login.1')}</button>
                    <p className="forgot-password text-right">
                        <a href="#">{t('Forgotpassword.1')}?</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginForm