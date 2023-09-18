import React, {useState} from "react";
import msjEn from "./../lang/en-US.json";
import msjEs from "./../lang/es-Ar.json";
import {IntlProvider} from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    let localeDefault;
    let msjDefault;
    const langStatus = localStorage.getItem('langStored');

    if (langStatus){
        localeDefault = langStatus;
        if (langStatus==='es-Ar'){
            msjDefault = msjEs
        }else if (langStatus==='en-US'){
            msjDefault=msjEn
        }else{
            localeDefault = 'es-US'
            msjDefault=msjEn
        }
    }

    const [msj, setmsj] = useState(msjDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLang = (lang) => {
        switch (lang) {
            case 'es-Ar': setmsj(msjEs);
                          setLocale('es-Ar');
                          localStorage.setItem('langStored', 'es-Ar');
                          break;
            case 'en-US': setmsj(msjEn);
                          setLocale('en-US');
                          localStorage.setItem('langStored', 'en-US');
                          break;
            default: 
                setmsj(msjEn);
                setLocale('en-US');
                localStorage.setItem('langStored', 'en-US');
        }
    }

    return (
        <langContext.Provider value={{ setLang: setLang }}>
            <IntlProvider locale={locale} messages={msj}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export {langContext, LangProvider}; 
