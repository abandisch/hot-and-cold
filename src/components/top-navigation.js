import React from 'react';
import './top-navigation.css';

export default function TopNavigation({onClickNewGame, onClickRules}) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => onClickRules()}>What?</button></li>
        <li><button onClick={() => onClickNewGame()}>+ New Game</button></li>
      </ul>
    </nav>
  );
}