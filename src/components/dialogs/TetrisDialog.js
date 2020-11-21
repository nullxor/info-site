import React from 'react';
import MsgBox from '../dos/msgbox/MsgBox';
import Tetris from '../tetris/Tetris';


export default function TetrisDialog(props) {
  console.log('Rendering Tetris');
  return (
    <div className="tetris">
    <MsgBox title="tetris" onButtonClick={props.onButtonClick} width="220px">
      <Tetris></Tetris>
    </MsgBox>
  </div>
  );
}