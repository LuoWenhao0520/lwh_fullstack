import React, { Component } from 'react';

export default class RefsForm extends Component {

  constructor(props) {
    super(props);
    this.username = React.createRef();
  }

  clickHandler = (e) => {
    console.log(this.username.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.username}></input>
        <button onClick={this.clickHandler}>提交</button>
      </div>
    )
  }
}