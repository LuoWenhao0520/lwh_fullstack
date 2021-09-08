import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes";
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => { //本来action必须是一个对象，因为用了thunk，现在可以是函数
    axios.get('http://localhost:3001/list').then((res) => {
      const data = res.data
      console.log(data);
      const action = initListAction(data)
      dispatch(action)
    })
  }
}