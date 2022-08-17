import React from 'react'
import { MdDelete } from 'react-icons/md';
import '../CSS/TodoItem.css'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='todoItem'>
      <div className='todo-content'>
      <h5 className='my-0 p-0'>{todo.title}</h5>
      <p>{todo.desc}</p>
      </div>
      <button className=' btn-completed' onClick={()=>{onDelete(todo)}}><MdDelete size='2em'/></button>
      <hr className='hr-line'/>
    </div>
  )
}

export default TodoItem