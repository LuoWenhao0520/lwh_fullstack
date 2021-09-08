import React, { Component } from 'react';

class EatItem extends Component {
  constructor(props) {
    super(props)
    this.handelClick = this.handelClick.bind(this)
  }
  state = {  }
  handelClick() {
    this.props.deleteItem(this.props.index);
  }
  render() { 
    return (
      <li onClick={this.handelClick}>{this.props.content}</li>
    );
  }
}
 
export default EatItem;