import React from "react";
import { FormattedMessage } from "react-intl";

const about = () =>{
    return (
        <div>
            <h2> <FormattedMessage id="about.h2" defaultMessage="Learn from the experts and score great deals!" /> </h2>
            <p> <FormattedMessage id="about.p" defaultMessage="Put together the most memorable wedding. Draw inspiration from our featured designers, caterers, stylists, and more. Book big deals and great packages." /></p>
        </div>
    )
}

export default about;