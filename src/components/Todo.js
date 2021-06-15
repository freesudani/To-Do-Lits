import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
    const [edit, SetEdit] = useState({
        id: null,
        value: ''
    })


    return TodoList.map((todo, index) => (
        <div className={todo.isComplete ? 'todo.row complete' : 'todo-row'} key={index}>

        </div>    
    ))
}

export default Todo
