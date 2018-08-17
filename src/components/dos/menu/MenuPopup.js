import React, { Component } from 'react';
import './MenuPopup.css';

export default class MenuPopup extends Component {
  render() {
    const popup = 
    <ul className="menu-popup">
      <div className="menu-popup-container">
        {this.props.children}
      </div>
    </ul>
    return this.props.children ? popup : '';
  }
}
