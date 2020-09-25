import React, { useRef, useEffect } from 'react';
import TetrisBuilder from '../../lib/tetris/tetrisbuilder';
import tetrisConfig from '../../lib/tetris/config';
import './Tetris.css';

export default function Tetris() {
  alert('Mardito');
  const tetrisRef = useRef();
  useEffect(() => {
    console.log(tetrisRef.current);
    const tetris = new TetrisBuilder(document.getElementById('tetris'), tetrisConfig);
    tetris.newGame();
    return function destroyTetris() {
      tetris.destroyGame();
    }
  });

  return (
    <div className="tetris">
      <div id="tetris" ref={tetrisRef}></div>
    </div>
  );
}