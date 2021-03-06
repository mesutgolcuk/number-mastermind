import React from 'react';
import { connect } from 'react-redux';

import DifficultyTypes from '../Game/difficultyTypes';

import { setDifficulty } from '../../actions/difficulties';
import { MenuButton } from '../../components/MenuButton/MenuButton';
import Header from '../../components/Header/Header';


interface IMenuProps {
  setDifficulty: any,
  difficulty: number
}

export class Menu extends React.Component<IMenuProps> {

  constructor(props: IMenuProps) {
    super(props);
    this.start = this.start.bind(this);
  }

  render() {
    return (
      <div>
        <Header/>
        <MenuButton textId="menu.button.easy" clicked={this.start} value={DifficultyTypes.EASY} to="/game"/>
        <MenuButton textId="menu.button.medium" clicked={this.start} value={DifficultyTypes.MEDIUM} to="/game"/>
        <MenuButton textId="menu.button.hard" clicked={this.start} value={DifficultyTypes.HARD} to="/game"/>
        <MenuButton textId="menu.history" to="/history"/>
        <p>
          MIT License Copyright (c) 2019 Mesut GÖLCÜK. 
          <a href="https://github.com/mesutgolcuk/number-mastermind" target="_blank" rel="noopener noreferrer">Source Code</a> 
        </p>
       
      </div>
    );
  }

  start(difficulty: number) {
    this.props.setDifficulty(difficulty);
  }

}

const mapDispatchToProps = (dispatch: any) => {
	return {
		setDifficulty: (difficulty: number) => {
			dispatch(setDifficulty(difficulty))
		}
	}
}

export default connect(
  null,
  mapDispatchToProps
)(Menu);
