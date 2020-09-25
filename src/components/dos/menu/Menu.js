import React from 'react';
import './Menu.css';

export default function Menu(props) {
  return (
    <ul className="menu" role="menu">
      {props.children}
    </ul>
  );  
}
