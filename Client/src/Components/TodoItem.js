import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import '../CSS/TodoItem.css'

const TodoItem = ({todo, onDelete}) => {

  const [checked, setChecked] = useState(false);
  let handleClick= () =>{
    console.log("Click event fired , Before: ", checked)
    setChecked(!checked);
    console.log("Click event fired , After: ", checked)

  }
  let handleChange = (e) =>{
    console.log("Change event fired , Before: ", checked)
    setChecked(e.target.checked);
    console.log("Change event fired , After: ", checked);
  }

  return (
    <>
    <div className='todoItem'>
      <div className="checkbox-input">
        <button onClick={handleClick}>
        <input type="checkbox" checked={checked} id="complete-checkbox" onChange={handleChange} />
        </button>
      </div>
      <div className='todo-content'>
      <h5 className='my-0 p-0'>{todo.title}</h5>
      <p>{todo.desc}</p>
      <p>Value of checkbox : {checked}</p>
      </div>
      <button className=' btn-completed' onClick={()=>{onDelete(todo)}}><MdDelete size='2em'/></button>
    </div>
      <hr className='hr-line'/>
    </>
  )
}

export default TodoItem