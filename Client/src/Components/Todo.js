import React, { useState } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo';
import '../CSS/Todo.css'
import {MdOutlineAddCircleOutline} from 'react-icons/md'

export default function Todo(props) {
  let completed = {
    color: "grey"
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='my-3'>
      <div className="todo-list">
        <h2 className='text-center py-3'>Things To Do</h2>
        <hr className='hr-line'/>
        {props.todos.length === 0 ? <h5 className='text-center mt-3 pb-4' style={completed}>Congratulations!!! Everything's Completed</h5> :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }

        <button id='add-btn' onClick={() => {setIsOpen(true)}}><MdOutlineAddCircleOutline size='2.5em'/></button>
        <AddTodo newTodo={props.newTodo} open={isOpen} onClose={() => {setIsOpen(false)}}/>
      </div>
    </div>
  )
}
