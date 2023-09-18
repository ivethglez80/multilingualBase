import React from "react";
import { FormattedMessage } from "react-intl";

const contact = () => {
    return (
        <>
            <div>
                <h2> <FormattedMessage id="contact.1h2" defaultMessage="Event details" /></h2>
                <p> <FormattedMessage id="contact.1p" defaultMessage="Any City Convention Center, Hall A
                    123 Anywhere St., Any City" />
                </p>
                <p> <FormattedMessage id="contact.2p" defaultMessage="
                    January 10 - 15, 2025
                    9 AM - 5 PM "/>
                </p>
            </div>
            <div>
                <h2>
                <FormattedMessage id="contact.2h2" defaultMessage="Get in touch"/>
                </h2>
                <p> <FormattedMessage id="contact.3p" defaultMessage="hello@reallygreatsite.com
                    123-456-7890" /> </p>
            </div>
        </>
    )
}

export default contact;