import React from 'react'
import TodoItem from './TodoItem'
import '../CSS/Todo.css'

export default function Todo(props) {
  return (
    <div className='container my-3'>
      <div className="conatiner todo-input">
        <h5>Title</h5>
        <input className='mb-3 p-1' type="text" name="title" id="title" placeholder='Enter Title' />

        <h5>Description</h5>
        <input className='mb-3 p-1' type="text" name="desc" id="desc" placeholder='Enter Description'/>

        <button className='btn-submit' type="submit" onClick={props.saveTodo}>Add</button>

      </div>



      <h2 className='text-center my-3'>Things To Do</h2>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })
      }
    </div>
  )
}
