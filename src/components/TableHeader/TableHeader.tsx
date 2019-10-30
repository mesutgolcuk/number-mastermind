import React from 'react';

import { FormattedMessage } from 'react-intl';

export default function () {
    return (
        <thead>
            <tr>
                <th><FormattedMessage id="game.order" /></th>
                <th><FormattedMessage id="game.guess" /></th>
                <th><FormattedMessage id="game.correct" /></th>
                <th><FormattedMessage id="game.false" /></th>
            </tr>
        </thead>
    );
}