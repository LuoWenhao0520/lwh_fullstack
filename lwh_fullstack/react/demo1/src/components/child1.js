import React, { Component } from 'react';

export default class Child1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.input1 = React.createRef();
  }

  componentDidMount() {
    this.setState({
      value: this.props.money
    })
  }

  changeHandler(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.changeHandler.bind(this)}></input>
      </div>
    )
  }
}