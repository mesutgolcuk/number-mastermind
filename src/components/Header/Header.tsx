import React from 'react';

import { FormattedMessage } from 'react-intl';

import logo from '../../logo.svg';

export default function () {
    return (
        <span>
            <img src={logo} alt="Mastermind logo" width="50%" height="100px" className="header-logo" />
            <h2><FormattedMessage id="general.game" /></h2>
        </span>

    )
}