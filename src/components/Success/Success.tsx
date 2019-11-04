import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

interface ISuccessProps {
    reset: any
}

export default function (props: ISuccessProps) {
    return (
        <div>
            <h3><FormattedMessage id="game.success" /></h3>
            <button onClick={props.reset} className="submit-button">
                <FormattedMessage id="game.play-again" />
            </button>
            <Link to="/">
                <button className="reset-button">
                    <FormattedMessage id="game.back" />
                </button>
            </Link>
        </div>
    );
}