import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import '../CSS/TodoItem.css'

const TodoItem = ({ todo, onDelete }) => {

  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  let isChecked = (item) =>{
    return checked.includes(item)? 'todo-checked' : '';
  }


  return (
    <>
      <div className='todoItem'>
        <div className="checkbox-input">
          <input type="checkbox" value={todo.sno} id="complete-checkbox" onChange={handleCheck} />
        </div>
        <div className='todo-content'>
          <h5 className={()=>isChecked(todo.sno)}>{todo.title}</h5>
          <p className={isChecked(todo.sno)}>{todo.desc}</p>
          {/* <p>{todo.sno}</p> */}
        </div>
        <button className=' btn-completed' onClick={() => { onDelete(todo) }}><MdDelete size='2em' /></button>
      </div>
      <hr className='hr-line' />
    </>
  )
}

export default TodoItem