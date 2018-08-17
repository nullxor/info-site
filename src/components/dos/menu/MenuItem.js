import React, { Component } from 'react';
import './MenuItem.css';

export default class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    }
  }

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.id);
    }
    this.setState((oldState) => ({
      popupVisible: !oldState.popupVisible
    }));
  }

  onBlur = () => {
    this.setState({popupVisible: false});
  }

  render() {
    const item = (
      <li onMouseOver={this.onClick} onMouseOut={this.onBlur} className={`menu-item ${this.state.popupVisible ? 'menu-item-active' : ''}`}>
        <span><i className={this.props.icon ? `icon fa ${this.props.icon}` : ''}></i><span className="red">{this.props.label[0]}</span>{this.props.label.substring(1)}</span>
        <span onClick={this.onBlur} className={`${this.state.popupVisible ? '' : 'hidden'}`}>{this.props.children}</span>
      </li>
    );
    const placeholder = (
      <li className="placeholder">
        {this.props.children}
      </li>
    );
    return this.props.placeholder ? placeholder : item;
  }
}

MenuItem.defaultProps = {
  icon: '',
  label: '',
  placeholder: false,
}