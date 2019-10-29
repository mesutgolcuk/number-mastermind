import React from 'react';

import { connect } from 'react-redux';

import { generateNumberArray } from '../../helpers/number-helpers';

interface IGameProps {
    difficulty: number
}

export class Game extends React.Component<IGameProps> {

    private hiddenNumber = generateNumberArray(this.props.difficulty)

    render() {
        return (
            <div>
                <p>Difficulty: {this.props.difficulty}</p>
                <p>Hidden Number: {this.hiddenNumber}</p>
            </div>
        );
    }

}

function mapStateToProps(state: any) {
    return {
        difficulty: state.difficultyReducer.difficulty
    }
}

export default connect(
    mapStateToProps
)(Game);