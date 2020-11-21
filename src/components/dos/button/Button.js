import React from 'react';
import './Button.css';

export default function Button(props) {

  return (
    <span onClick={props.onClick} className="button">
      <span className="label">{props.label}</span>  
    </span>
  );  
}
