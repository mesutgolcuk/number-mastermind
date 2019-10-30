import React from 'react';

import IHistory from '../../containers/Game/IHistory';

interface ITableBodyProps {
    array: IHistory[]
}

export default function (props: ITableBodyProps) {
    return (
        <tbody>
            {props.array.map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.guess}</td>
                        <td>{value.correct}</td>
                        <td>{value.false}</td>
                    </tr>
                )
            })}
        </tbody>

    );
}