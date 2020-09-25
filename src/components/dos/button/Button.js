import React, { useState } from 'react';
import './Button.css';

export default function Button(props) {

  const [pushed, setPushed] = useState(false);

  const onMouseDown = () => setPushed(true);
  const onMouseUp = () => setPushed(false);

  return (
    <span onClick={props.onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseOut={onMouseUp} className={`button ${pushed ? 'pushed' : ''}`}>
      <span className="label">{props.label}</span>  
    </span>
  );  
}
