import React from 'react';
import { FormattedMessage } from 'react-intl';
import { MenuButton } from '../../components/MenuButton/MenuButton';

export default function NotFound() {
    return (
        <div>
            <FormattedMessage id="404.description"/>
            <p className='not-found-url'>{window.location.href}</p>
            <p>404 <FormattedMessage id="general.error"/></p> 
            <MenuButton clicked={() => window.location.href = '/'} textId="404.go-to-menu" to="/"/>
        </div>
    )
}