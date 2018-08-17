import React from 'react';

export default class Msg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'coconut'
    };
  }
 
  onChange = (e) => {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.onChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>        
        <div>{this.state.text}</div>
      </div>
    );
  }
}
