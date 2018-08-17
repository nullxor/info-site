import React, { Component } from 'react';
import './MenuPopupItem.css';

export default class MenuPopupItem extends Component {
  onClick = () => {
    if (this.props.onItemClick) {
      this.props.onItemClick(this.props.id);
    }
  }

  render() {
    return (
      <li className="menu-popup-item" onClick={this.onClick}>
        <span><span className="red">{this.props.label[0]}</span>{this.props.label.substring(1)}</span>
      </li>
    );  
  }
}
