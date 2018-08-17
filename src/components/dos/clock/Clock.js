import React from 'react';


export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      ampm: date.getHours() > 0 && date.getHours() < 13 ? 'AM' : 'PM'
    };
  }

  updateTime = () => {
    const date = new Date();
    this.setState({
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      ampm: date.getHours() > 0 && date.getHours() < 13 ? 'AM' : 'PM'
    });
  }

  componentWillMount() {
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <span>
        {`${this.state.hour}:${this.state.minutes}:${this.state.seconds < 10 ? '0' : ''}${this.state.seconds} ${this.state.ampm}`}
      </span>
    );
  }

}