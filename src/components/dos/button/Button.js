import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pushed: false
    }
  }

  onMouseDown = () => {
    this.setState({ pushed: true });
  }

  onMouseUp = () => {
    this.setState({ pushed: false });
  }

  render() {
    return (
      <span onClick={this.props.onClick} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseOut={this.onMouseUp} className={`button ${this.state.pushed ? 'pushed' : ''}`}>
        <span className="label">{this.props.label}</span>  
      </span>
    );  
  }
}

Button.defaultProps = {
  onClick: () => {}
};