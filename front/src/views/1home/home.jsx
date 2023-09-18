import React from "react";
import {FormattedMessage} from "react-intl";

const Home = () =>{
    return (
        <div>            
            <h1> <FormattedMessage id="home.h2" defaultMessage="Wedding Expo 2025"/> </h1>
            <p> <FormattedMessage id="home.p" defaultMessage="Your gateway to perfectly planned weddings!" /> </p>
            <button> <FormattedMessage id="home.btn" defaultMessage="REGISTER HERE" /> </button>
        </div>
    )
}

export default Home;