import React, { Component } from 'react';

export default class RefsAndDom extends Component {

  constructor(props) {
    super(props);
    this.HelloDiv = React.createRef();
    this.state = {

    };
  }

  componentDidMount(){
    console.log(this.HelloDiv.current);
    this.HelloDiv.current.style.color = "red"
  }

  render() {
    return (
      <div>
        RefsAndDOM
        <div ref={this.HelloDiv}>
          hello
        </div>
      </div>
    )
  }
}