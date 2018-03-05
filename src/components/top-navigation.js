import React from 'react';
import './top-navigation.css';

export default function TopNavigation({onClickNewGame, onClickShowRules}) {
  return (
    <nav>
      <ul>
        <li><button id="show-rules" onClick={onClickShowRules}>What?</button></li>
        <li><button id="new-game" onClick={onClickNewGame}>+ New Game</button></li>
      </ul>
    </nav>
  );
}