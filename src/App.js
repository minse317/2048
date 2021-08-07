import React from 'react';
import Hearder from './component/Hearder';
import AboveGame from './component/AboveGame';
import Game from './component/Game';
export default function App() {
  return (
    <div className="container">
      <Hearder />
      <AboveGame />
      <Game />
    </div>
  );
}

