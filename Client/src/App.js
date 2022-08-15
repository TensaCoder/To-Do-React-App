import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo.js';
import {useState} from 'react';

function App() {
  let initTodo;
  
  if (localStorage.getItem('todos') === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const [todos, setTodos] = useState(initTodo);

  let onDelete =(todo)=>{

    setTodos(todos.filter((showTodo)=>{
      return showTodo!==todo
    }));
    localStorage.setItem('todos', JSON.stringify(todos))
  };

  let sno;
  let newTodo = (title, desc)=>{
    if (todos.length===0){
      sno = 1;
    }
    else{
      sno = todos[todos.length - 1].sno + 1; 
    }
    let newtodo ={
      sno: sno,
      title:title,
      desc:desc
    }
    console.log(newtodo);
    setTodos([...todos,newtodo]);

    // if (localStorage.getItem('todos')===null){
    //   localStorage.setItem('todos', JSON.stringify(todos))
    // }
    localStorage.setItem('todos', JSON.stringify(todos))
  };


  return (
    <div>
      <Header />
      <Todo todos={todos} onDelete={onDelete} newTodo={newTodo}/>
      <About/>
      <Footer />
    </div>
  );
}

export default App;
