import React, { useState, useRef, useEffect } from 'react';
import './Window.css';

export default function Window(props) {

  return (
    <div className="window">
      <div className="border">
        <div className="window-title">
          <span className="title">{props.title}</span>
        </div>
        <div className="window-body">
          {props.children}
        </div>
      </div>
    </div>
  );  
}

Window.defaultProps = {
  title: ''
}