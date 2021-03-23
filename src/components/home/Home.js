import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import lotus from '../../lotus.png'
import { useTranslation } from 'react-i18next';


export function Home ()  {
    const { t, i18n } = useTranslation();
   
        return (
            <div className="home-wrapper">
                <div className="home-inner">
                    <Image src={lotus} rounded style={{ width: "100%" }} />
                    <div className="home-page-text">
                        <h1>
                        {t('HomeTextTitle.1')}
                         </h1>
                        <p style={{textAlign:"center"}}> 
                        {t('HomeText.1')}
                        </p>
                        </div>
                    </div>
                </div>
        )
    }

export default Home