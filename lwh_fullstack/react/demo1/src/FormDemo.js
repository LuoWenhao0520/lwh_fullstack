import React, { Component } from 'react';

class FormDemo extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  }
  onChangeHandle = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
       <div>
         <form onSubmit={this.handleSubmit}>
           <input value={this.state.value} onChange={this.onChangeHandle}></input>
           <input type="submit" value="提交"></input>
         </form>
       </div>
    );
  }
}

export default FormDemo