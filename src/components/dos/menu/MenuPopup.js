import React from 'react';
import './MenuPopup.css';

export default function MenuPopup(props) {
  const popup = 
  <ul className="menu-popup">
    <div className="menu-popup-container">
      {props.children}
    </div>
  </ul>
  return props.children ? popup : '';
}