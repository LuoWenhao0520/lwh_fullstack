import React, { Component } from 'react';
import store from './store'
import 'antd/dist/antd.css';
import { getAddItemAction, getDeleteItemAction, getInputChangeAction, getTodoList, initListAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handelStoreChange = this.handelStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handelStoreChange)
  }
  handelStoreChange(){
    this.setState(store.getState())
  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleBtnClick(){
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index){
    const action = getDeleteItemAction(index)
    console.log(index);
    store.dispatch(action)
  }

  componentDidMount() {
    const action = getTodoList()
    console.log(action);
    store.dispatch(action)
  }

  render(){
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      ></TodoListUI>
    )
  }
}

export default TodoList