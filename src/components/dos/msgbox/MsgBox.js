import React, { Component } from 'react';
import './MsgBox.css';
import Window from '../window/Window';
import Button from '../button/Button';

export default class MsgBox extends Component {

  buttonClick = () => {
    this.props.onButtonClick();
  }

  render() {
    return (
    <Window title={this.props.title} visible={this.props.visible}>
      <div className="text-justify">
        {this.props.children}
      </div>
      <div className="text-center bottom-button">
        <Button label={this.props.buttonLabel} onClick={this.buttonClick}/>
      </div>
    </Window>
    );
  }
}

MsgBox.defaultProps = {
  title: '',
  visible: true,
  buttonLabel: 'OK',
  onButtonClick: () => {},
}