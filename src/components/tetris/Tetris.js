import React, { useRef, useEffect } from 'react';
import TetrisBuilder from '../../lib/tetris/tetrisbuilder';
import tetrisConfig from '../../lib/tetris/config';
import './Tetris.css';

export default function Tetris() {
  const tetrisRef = useRef();
  useEffect(() => {
    console.log(tetrisRef.current);
    const tetris = new TetrisBuilder(tetrisRef.current, tetrisConfig);
    tetris.newGame();
    return function destroyTetris() {
      tetris.destroyGame();
    }
  });

  return (
    <div className="tetris">
      <div ref={tetrisRef}></div>
    </div>
  );
}