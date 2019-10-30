import React from 'react';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { generateNumberArray } from '../../helpers/number-helpers';
import TableHeader from '../../components/TableHeader/TableHeader';
import Success from '../../components/Success/Success';
import PlayGame from '../../components/PlayGame/PlayGame';

import IHistory from './IHistory';
import TableBody from '../../components/TableBody/TableBody';
import Header from '../../components/Header/Header';

interface IGameState {
    history: IHistory[],
    inputValue: string
}

interface IGameProps {
    difficulty: number
}
export class Game extends React.Component<IGameProps, IGameState> {

    private hiddenNumber = generateNumberArray(this.props.difficulty);
    private isFound = false;
    constructor(props: IGameProps) {
        super(props);
        this.state = {
            history: [],
            inputValue: ''
        }
        this.submit = this.submit.bind(this);
        this.updateNumber = this.updateNumber.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    render() {
        return (
            <div>
                <Header/>
                <h4><FormattedMessage id="game.explanation" values={{digit: this.props.difficulty}}/></h4>
                {this.isFound ? (<Success reset={this.resetGame} />) : (
                    <PlayGame value={this.state.inputValue} changed={this.updateNumber} submit={this.submit} />
                )}
                <table>
                    <TableHeader/>
                    <TableBody array={this.state.history}/>
                </table>
                <style>{"table{border:1px solid black; width:50%; margin-left:25%; margin-top:20px}"}</style>
            </div>
        );
    }

    updateNumber(event: any) {
        this.setState({
            inputValue: event.target.value
        });
    }

    submit(event: any) {
        event.preventDefault();
        this.setState({
            inputValue: ''
        })
        let historyItem = this.compareAndCreateHistory()
        if (this.hasWon(historyItem)) {
            this.isFound = true;
        }
        const setNumber = new Set(historyItem.guess);
        if (historyItem.guess.indexOf(NaN) >= 0 ||
         historyItem.guess.length !== this.props.difficulty || 
         setNumber.size !== this.props.difficulty) {
            return;
        }
        this.setState({
            history: this.state.history.concat(historyItem)
        });
    }

    compareAndCreateHistory(): IHistory {
        const numbers = Array.from(this.state.inputValue, Number);
        let historyItem: IHistory = {
            guess: numbers,
            correct: 0,
            false: 0
        }
        numbers.forEach((number, index) => {
            if (number === this.hiddenNumber[index]) {
                historyItem.correct++;
            } else if (this.hiddenNumber.indexOf(number) >= 0) {
                historyItem.false++;
            }
        });
        return historyItem;
    }

    hasWon(historyItem: IHistory): boolean {
        return historyItem.correct === this.props.difficulty
    }

    resetGame() {
        this.hiddenNumber = generateNumberArray(this.props.difficulty);
        this.isFound = false;
        this.setState({
            history: []
        });
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