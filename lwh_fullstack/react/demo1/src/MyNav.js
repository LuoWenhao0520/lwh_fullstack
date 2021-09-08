import React, { Component } from 'react';

export default class MyNav extends Component{
  render() {
    console.log(this.props.nav);
    return (
      <div>
        <ul>
          {
            this.props.nav.map((item,index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}