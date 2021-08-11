import React, { ReactElement, FC, useCallback, useState, useEffect, useReducer } from "react";

import TdInput from "./Input";
import TdList from "./List";
import TdItem from "./List/Item";
import { todoReducer } from "./reducer";
import { ACTION_TYPE, ITodo } from "./typings";
import { IState } from "./typings";



// const intialState: IState  = {
//     todoList: []
// }

function init (initTodoList: ITodo[]) : IState{
    return {
        todoList: initTodoList
    }
}

const TodoList: FC = (): ReactElement => {

    // const [ todoList, setTodoList ] = useState<ITodo[]>([])

    const [ state,dispatch ] = useReducer(todoReducer,[],init)

    useEffect(() => {
        // console.log(state.todoList);
        const todoList = JSON.parse(localStorage.getItem('todolist') || '[]')

        dispatch({
            type: ACTION_TYPE.INIT_TODO,
            payload: todoList
        })
    }, []);

    useEffect(() => {
        localStorage.setItem('todolist',JSON.stringify(state.todoList));
    },[state.todoList])

    const addTodo = useCallback((todo: ITodo) => {
        // console.log(todo);
        // setTodoList(todoList => [...todoList,todo])
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    },[])

    const removeTodo = useCallback((id:number):void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    },[])

    const toggleTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id
        })
    },[])

    

    return (
        <div className="todo-list">
            <TdInput 
                addTodo={ addTodo }
                todoList={ state.todoList }
            />
            <TdList
                todoList={ state.todoList }
                removeTodo={ removeTodo }
                toggleTodo={ toggleTodo }
            />
        </div>
    );
}

export default TodoList;