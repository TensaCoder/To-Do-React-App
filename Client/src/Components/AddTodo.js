import React, {useState} from 'react';
import '../CSS/AddTodo.css'

const AddTodo = ({newTodo}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    return (
        <div className="todo-input">
            <h5>Title</h5>
            <input className='mb-3 p-1' type="text" name="title" id="title" placeholder='Enter Title' />

            <h5>Description</h5>
            <input className='mb-3 p-1' type="text" name="desc" id="desc" placeholder='Enter Description' />

            <button className='btn-submit' type="submit" onClick={()=>{newTodo(title, desc)}}>Add</button>

        </div>
    )
}

export default AddTodo