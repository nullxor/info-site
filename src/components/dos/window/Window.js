import React from 'react';
import './Window.css';

export default function Window(props) {
  return (
    <div className="window">
      <div className="window-title">{props.title}</div>
      <div className="window-wrap">
        {props.children}
      </div>
    </div>
  );  
}

Window.defaultProps = {
  title: ''
}