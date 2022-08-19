import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import '../CSS/TodoItem.css'

const TodoItem = ({todo, onDelete}) => {

  const [radioValue, setRadioValue] = useState('false');

  let onChange=(event)=>{
    setRadioValue(event.target.value);
    console.log(event.target.value)
    console.log(radioValue);
  }

  return (
    <>
    <div className='todoItem'>
      <div className="radio-check">
        <input type="radio" value='true' name={todo.sno} id="complete-radio" onChange={onChange} />
      </div>
      <div className='todo-content'>
      <h5 className='my-0 p-0'>{todo.title}</h5>
      <p>{todo.desc}</p>
      </div>
      <button className=' btn-completed' onClick={()=>{onDelete(todo)}}><MdDelete size='2em'/></button>
    </div>
      <hr className='hr-line'/>
    </>
  )
}

export default TodoItem