import React from 'react';
import './top-navigation.css';

export default function TopNavigation({onClickNewGame, onClickShowRules}) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => onClickShowRules()}>What?</button></li>
        <li><button onClick={() => onClickNewGame()}>+ New Game</button></li>
      </ul>
    </nav>
  );
}