import React from 'react';
import MsgBox from '../dos/msgbox/MsgBox';
import Tetris from '../tetris/Tetris';


export default function TetrisDialog(props) {
  console.log('Rendering Tetris');
  return (
    <div className="tetris">
    <MsgBox title="tetris" onButtonClick={props.onButtonClick}>
      <Tetris></Tetris>
    </MsgBox>
  </div>
  );
}