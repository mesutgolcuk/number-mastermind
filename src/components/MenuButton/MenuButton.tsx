import React from 'react';

import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

const buttonStyle = {
    display: 'block',
    width: '50%',
    height: '50px',
    marginTop: '10px',
    marginLeft: '25%'
}


type MenuButtonProps = {
    clicked: any,
    textId: string,
    to: string,
    value?: number
};

export const MenuButton: React.SFC<MenuButtonProps> = (props) => {
    return (
        <Link to={props.to} style={{ textDecoration: 'none' }}>
            <button onClick={() => props.clicked(props.value)} style={buttonStyle}>
                <FormattedMessage id={props.textId} defaultMessage="Button" />
            </button>
        </Link>
    );
}