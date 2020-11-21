import React from 'react';
import './MenuPopupItemLink.css';

export default function MenuPopupItemLink(props) {
  const onClick = () => {
    if (props.onItemClick) {
      props.onItemClick(props.id);
    }
  }

  return (
    <li className="menu-popup-item" onClick={onClick}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <i className={`fa ${props.icon}`}></i>
        <span className="red"> {props.label[0]}</span>{props.label.substring(1)}
      </a>
    </li>
  );  
}

MenuPopupItemLink.defaultProps = {
  link: '',
  icon: ''
};