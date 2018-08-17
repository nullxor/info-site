import React, { Component } from 'react';
import './MenuPopupItemLink.css';

export default class MenuPopupItemLink extends Component {
  onClick = () => {
    if (this.props.onItemClick) {
      this.props.onItemClick(this.props.id);
    }
  }

  render() {
    return (
      <li className="menu-popup-item" onClick={this.onClick}>
        <a href={this.props.link} target="_blank"><i className={`fa ${this.props.icon}`}></i><span className="red"> {this.props.label[0]}</span>{this.props.label.substring(1)}</a>
      </li>
    );  
  }
}

MenuPopupItemLink.defaultProps = {
  link: '',
  icon: ''
};