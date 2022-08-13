import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo';
import '../CSS/Todo.css'

export default function Todo(props) {
  let completed = {
    color: "grey"
  }

  return (
    <div className='my-3'>
      <AddTodo newTodo={() => { props.newTodo() }} />

      <div className="todo-list">
        <h2 className='text-center py-3'>Things To Do</h2>
        {props.todos.length === 0 ? <h5 className='text-center mt-3 pb-4' style={completed}>Congratulations!!! Everything's Completed</h5> :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </div>
  )
}
