import React from 'react';

import { FormattedMessage } from 'react-intl';
import HowToPlay from '../HowToPlay/HowToPlay';

type GameExplanationProps = {
    difficulty: number
};

export const GameExplanation: React.SFC<GameExplanationProps> = (props) => {
    return (
        <span>
            <HowToPlay/>
            {showDifficulty(props.difficulty)}
            <h4><FormattedMessage id="game.explanation" values={{digit: props.difficulty}}/></h4>
        </span>
    );

    function showDifficulty(difficulty: number) {
        const difficultyIDArray = ["game.difficulty-easy","game.difficulty-medium","game.difficulty-hard"];
        return <h4><FormattedMessage id={difficultyIDArray[difficulty % 3]}/></h4>;
      }
}