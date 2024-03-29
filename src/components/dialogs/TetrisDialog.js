import React from 'react';
import MsgBox from '../dos/msgbox/MsgBox';
import Tetris from '../tetris/Tetris';


export default function TetrisDialog(props) {
  return (
    props.show &&
    <div className="tetris">
      <MsgBox title="tetris" onButtonClick={props.onButtonClick} width="220px">
        <Tetris></Tetris>
      </MsgBox>
    </div>
  );
}