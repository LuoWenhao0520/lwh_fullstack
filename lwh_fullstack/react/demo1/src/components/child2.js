import React, { Component } from 'react';

export default class Child2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.input2 = React.createRef();
  }

  componentDidMount() {
    this.setState({
      value: this.props.money * 7
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