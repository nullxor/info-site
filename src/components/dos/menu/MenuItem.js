import React, { useState } from 'react';
import './MenuItem.css';

export default function MenuItem(props) {

  const [popupVisible, setPopupVisible] = useState(false);

  const onClick = () => {
    if (props.onClick) {
      props.onClick(props.id);
    }
    setPopupVisible(!popupVisible);
  }

  const onBlur = () => setPopupVisible(false);

  const item = (
    <li onMouseOver={onClick} onMouseOut={onBlur} className={`menu-item ${popupVisible ? 'menu-item-active' : ''}`}>
      <span><i className={props.icon ? `icon fa ${props.icon}` : ''}></i><span className="red">{props.label[0]}</span>{props.label.substring(1)}</span>
      <span onClick={onBlur} className={`${popupVisible ? '' : 'hidden'}`}>{props.children}</span>
    </li>
  );
  const placeholder = (
    <li className="placeholder">
      {props.children}
    </li>
  );
  return props.placeholder ? placeholder : item;
}

MenuItem.defaultProps = {
  icon: '',
  label: '',
  placeholder: false,
}