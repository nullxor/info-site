import React, { useEffect, useState } from 'react';
import './MsgBox.css';
import Window from '../window/Window';
import Button from '../button/Button';

export default function MsgBox(props) {
  const [visible, setVisible] = useState(props.visible);
  
  const buttonClick = () => setVisible(false);

  console.log(visible && props.visible);

  return props.visible && (
    <Window title={props.title} visible={visible}>
      <div className="main text-justify">
        {props.children}
      </div>
      <div className="text-center bottom-button">
        <Button label={props.buttonLabel} onClick={buttonClick}/>
      </div>
    </Window>
  );
}

MsgBox.defaultProps = {
  title: '',
  visible: true,
  buttonLabel: 'OK',
  onButtonClick: () => {},
}