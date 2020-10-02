import React from 'react';
import './MsgBox.css';
import Window from '../window/Window';
import Button from '../button/Button';

export default function MsgBox(props) {
  return (
    <Window title={props.title}>
      <div className="main text-justify">
        {props.children}
      </div>
      <div className="text-center bottom-button">
        <Button label={props.buttonLabel} onClick={props.onButtonClick}/>
      </div>
    </Window>
  );
}

MsgBox.defaultProps = {
  title: '',
  buttonLabel: 'OK',
  onButtonClick: () => {},
}