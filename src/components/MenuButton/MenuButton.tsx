import React from 'react';

import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

type MenuButtonProps = {
    clicked?: any,
    textId: string,
    to: string,
    value?: number
};

export const MenuButton: React.SFC<MenuButtonProps> = (props) => {
    return (
        <Link to={props.to} style={{ textDecoration: 'none' }}>
            <button onClick={() => props.clicked? props.clicked(props.value): ''}  className="menu-button">
                <FormattedMessage id={props.textId} defaultMessage="Button" />
            </button>
        </Link>
    );
}