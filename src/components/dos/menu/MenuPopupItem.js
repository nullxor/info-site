import React from 'react';
import './MenuPopupItem.css';

export default function MenuPopupItem(props) {
  const onClick = () => {
    if (props.onItemClick) {
      props.onItemClick(props.id);
    }
  }

  return (
    <li className="menu-popup-item" onClick={onClick}>
      <span><span className="red">{props.label[0]}</span>{props.label.substring(1)}</span>
    </li>
  );  
}
