import React, { useRef, FC,ReactElement } from "react";
import { ITodo } from "../typings";

interface Iprops {
    addTodo: (todo: ITodo) => void
    todoList: ITodo[];
};

const TdInput: FC<Iprops> = ({
    addTodo,
    todoList
}): ReactElement => {

    const inputRef = useRef<HTMLInputElement>(null);

    const addItem = (): void => {
        const val: string = inputRef.current!.value.trim();
        if(val.length){
            const isExist = todoList.find(todo => todo.content === val)

            if (isExist){
                alert('已存在该项');
                return;
            }

            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            });
        }
    }

    return (
        <div className="todo-input">
            <input type="text" placeholder="请输入代办事项" ref={inputRef} />
            <button onClick={ addItem }>增加</button>
        </div>
    );
}

export default TdInput;