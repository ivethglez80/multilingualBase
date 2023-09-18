import React from "react";
import { FormattedMessage } from "react-intl";

const cuatro = () =>{
    return (
        <div>
            <h2> <FormattedMessage id="four.h2" defaultMessage="Trend Forecast" /> </h2>
            <p> <FormattedMessage id="four.p" defaultMessage="Know what's in and out from industry insiders." /></p>
            <button> <FormattedMessage id="four.btn" defaultMessage="Learn More" /> </button>
        </div>
    )
}

export default cuatro;