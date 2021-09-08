import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';

export default class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      money: 1
    };
  }

  render() {
    return (
      <div>
        <p>Parent</p>
        人民币: <Child1 money={this.state.money}></Child1>
        美  元: <Child2 money={this.state.money}></Child2>
      </div>
    )
  }
}