import React, { Component } from 'react';

class KeyDemo extends Component{
  constructor() {
    super();
    this.state = {
      userInfo: [
        {
          name: 'lwh',
          sex: 'M'
        },
        {
          name: 'wen',
          sex: 'F'
        }
      ]
    }
  }

  render() {
    return (
       <div>
         <ul>
           {
             this.state.userInfo.map((ele,index) => {
               return (
                 <li key={index}>
                   <span>{ ele.name }</span>
                   <span>{ ele.sex }</span>
                 </li>
               )
             })
           }
         </ul>
       </div>
    );
  }
}

export default KeyDemo