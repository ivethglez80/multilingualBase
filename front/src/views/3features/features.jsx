import React from "react";
import { FormattedMessage } from "react-intl";

const features = () =>{
    return (
        <div>
            <h2> <FormattedMessage id="features.h2" defaultMessage="Supplier Interaction" /></h2>
            <p> <FormattedMessage id="features.p" defaultMessage="Get to chat with hundreds of wedding vendors." /></p>
            <button> <FormattedMessage id="features.btn" defaultMessage="Learn more" /> </button>
        </div>
    )
}

export default features;