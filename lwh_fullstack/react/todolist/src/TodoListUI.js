import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px',marginLeft: '10px'}}>
      <div>
        <Input 
          value={props.inputValue} 
          placeholder="todoList" 
          style={{width: '300px',marginRight: '10px'}}
          onChange={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{marginTop: '10px',width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (
          <List.Item onClick={() => props.handleItemDelete(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
  
}


// class TodoListUI extends Component {
//   render() {
//     return (
      
//     )
//   }
// }

export default TodoListUI