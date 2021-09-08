import React, {Component, Fragment} from 'react'
import EatItem from './eatItem'
import '../style/eat.css'

class Eat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: ['宫保鸡丁','醋熘肥肠']
    }
  }
  inputChange() {
    this.setState({
      inputValue: this.input.value
    })
  }
  addList(){
    this.setState({
      list: [...this.state.list,this.state.inputValue]
    })
  }
  deleteItem(index) {
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* <label for="addGoods">加菜:</label> */}
          <input id="addGoods"
          value={this.state.inputValue} 
          onChange={this.inputChange.bind(this)} 
          className="input"
          ref={(input) => {this.input = input}}
          ></input>
          <button onClick={this.addList.bind(this)}>下单</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              // return <li key={index+item} onClick={this.deleteItem.bind(this,index)}>{item}</li>
              return (<EatItem content={item} index={index} key={index+item} list={this.state.list} deleteItem={this.deleteItem.bind(this)}/>)
            })
          }
          
        </ul>
      </Fragment>
    )
  }
}

export default Eat