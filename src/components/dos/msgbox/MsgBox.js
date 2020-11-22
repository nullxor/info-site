import React from 'react';
import Window from '../window/Window';
import Button from '../button/Button';
import './MsgBox.css';

export default function MsgBox(props) {
  return (
    <Window title={props.title} width={props.width}>
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