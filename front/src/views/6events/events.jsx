import React from "react";
import { FormattedMessage } from "react-intl";

const events = () => {
    return (
        <>
            <div>
                <h2> <FormattedMessage id="events.h2" defaultMessage="Upcoming events" /></h2>
            </div>
            <div>
                <h4> <FormattedMessage id="events.1h4" defaultMessage="BAKS Bridal Show" /> </h4>
                <p><FormattedMessage id="events.1p" defaultMessage="An Annual National Industry Event
                    January 10, 2025, 9:00 a.m. to 5:00 p.m.
                    Conference Hall A, National Event Hall" /> </p>
            </div>
            <div>
                <h4> <FormattedMessage id="events.2h4" defaultMessage="Bridal Makeup Demo" /> </h4>
                <p> <FormattedMessage id="events.2p" defaultMessage="An Annual National Industry Event
                    January 11, 2025, 9:00 a.m. to 5:00 p.m.
                    Conference Hall A, National Event Hall" /></p>
            </div>
            <div>
                <h4> <FormattedMessage id="events.3h4" defaultMessage="LUV Wedding Caravan" /> </h4>
                <p> <FormattedMessage id="events.3p" defaultMessage="An Annual National Industry Event
                    January 12, 2025, 9:00 a.m. to 5:00 p.m.
                    Conference Hall A, National Event Hall" /> </p>
            </div>
        </>
    )
}

export default events;