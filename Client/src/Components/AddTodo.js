import React, {useState} from 'react';
import '../CSS/AddTodo.css';
import {AiFillCloseCircle} from 'react-icons/ai';

const AddTodo = ({newTodo, open, onClose}) => {
    
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    
    let newTitle = (event)=>{ setTitle(event.target.value) };
    let newDesc = (event)=>{ setDesc(event.target.value) }
    let submit = (event)=>{
        event.preventDefault();
        if (!title || !desc){
            alert("Title or Description can't be empty!!!");
        }
        else{
            newTodo(title, desc);
        }
    }
    
    if(!open) return null;

    return (
        <div className="overlay">
        <div className="todo-input">
            <button className='close-btn' onClick={onClose}> <AiFillCloseCircle size='1.5em'/></button>
            <h5 >Title</h5>
            <input className='mb-3 p-1' type="text" value={title} name="title" id="title" placeholder='Enter Title' onChange={newTitle} />

            <h5>Description</h5>
            <input className='mb-3 p-1' type="text" value={desc} name="desc" id="desc" placeholder='Enter Description' onChange={newDesc}/>

            <button className='btn-submit' type="submit" onClick={submit}>Add</button>
        </div>
        </div>
    )
}


export default AddTodo