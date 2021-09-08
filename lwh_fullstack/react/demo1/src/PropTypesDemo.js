import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PropTypesDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        PropsTypeDemo: {this.props.title}
      </div>
    )
  }
}

PropTypesDemo.propTypes = {
  title: PropTypes.number.isRequired
}