import React, { Component } from 'react';
import Compose from './compose';
import PropTypesDemo from './PropTypesDemo';

export default class App extends Component{


  render() {
    const nav1 = ['luo','wen','hao']
    const nav2 = ['wen','hao','luo']
    return (
      <div>
        <PropTypesDemo title="lwh"></PropTypesDemo>
      </div>
    )
  }
}