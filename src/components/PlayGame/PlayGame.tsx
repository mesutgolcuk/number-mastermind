import React from 'react';

import { FormattedMessage } from 'react-intl';

interface IPlayGameProps {
    value: string,
    changed: any,
    submit: any,
    reset: any
}

export default function (props: IPlayGameProps) {
    return (
        <div>
            <form onSubmit={props.submit}>
                <input type="tel" value={props.value} onChange={props.changed} className="game-input" />
                <button type="submit" className="submit-button">
                    <FormattedMessage id="game.submit" />
                </button>
                <button onClick={props.reset} className="reset-button">
                    <FormattedMessage id="game.reset" />
                </button>
            </form>
        </div>
    );
}