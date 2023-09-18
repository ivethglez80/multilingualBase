import React from "react";
import { FormattedMessage } from "react-intl";

const cinco = () =>{
    return (
        <div>
            <h2> <FormattedMessage id="five.h2" defaultMessage="Discounts & Freebies" /></h2>
            <p> <FormattedMessage id="five.p" defaultMessage="Win prizes and enjoy special rates on selected services." /></p>
            <button> <FormattedMessage id="five.btn" defaultMessage="Learn more" /> </button>
        </div>
    )
}

export default cinco;