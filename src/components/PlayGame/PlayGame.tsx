import React from 'react';

import { FormattedMessage } from 'react-intl';

interface IPlayGameProps {
    value: string,
    changed: any,
    submit: any
}

export default function (props: IPlayGameProps) {
    return (
        <form onSubmit={props.submit}>
            <input type="text" value={props.value} onChange={props.changed} />
            <button type="submit">
                <FormattedMessage id="game.submit" />
            </button>
        </form>
    );
}