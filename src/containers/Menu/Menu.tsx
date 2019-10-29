import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import DifficultyTypes from '../Game/difficultyTypes';

import { setDifficulty } from '../../actions/difficulties';
import { MenuButton } from '../../components/MenuButton/MenuButton';
import logo from '../../logo.svg';

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
        <img src={logo} alt="Mastermind logo" width="50%" height="100px"/>
        <h1><FormattedMessage id="general.game"/></h1>
        <MenuButton textId="menu.button.easy" clicked={this.start} value={DifficultyTypes.EASY} to="/game"/>
        <MenuButton textId="menu.button.medium" clicked={this.start} value={DifficultyTypes.MEDIUM} to="/game"/>
        <MenuButton textId="menu.button.hard" clicked={this.start} value={DifficultyTypes.HARD} to="/game"/>
        {this.props.difficulty}
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
