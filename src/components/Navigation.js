import React from 'react';
import NavLink from '../containers/NavLink';
import {RESTART_GAME, SHOW_GAME_RULES} from '../actions/actionTypes';
import './Navigation.css';

const Navigation = () => (
  <nav>
    <ul>
      <NavLink linkClass={'display-rules'} btnAction={SHOW_GAME_RULES}>What?</NavLink>
      <NavLink linkClass={'restart-game'} btnAction={RESTART_GAME}>+ New Game</NavLink>
    </ul>
  </nav>
);

export default Navigation;