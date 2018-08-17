import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pushed: false
    }
  }

  render() {
    return (
      <ul className="menu" role="menu">
        {this.props.children}
      </ul>
    );  
  }
}
