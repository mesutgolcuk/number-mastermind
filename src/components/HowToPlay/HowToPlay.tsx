import React from 'react';

import { FormattedMessage } from 'react-intl';

interface IHowTopPlayProps {
}

export default function (props: IHowTopPlayProps) {
    return (
        <div className="how-to-play">
            <ul>
                <li><FormattedMessage id="how-to-play.message1"/></li>
                <li><FormattedMessage id="how-to-play.message2"/></li>
                <li><FormattedMessage id="how-to-play.message3"/></li>
            </ul>
        </div>
    );
}