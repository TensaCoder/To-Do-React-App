import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo.js';
import {useState} from 'react';

function App() {
  let onDelete =(todo)=>{

    setTodos(todos.filter((showTodo)=>{
      return showTodo!==todo
    }));
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
  };

  const [todos, setTodos] = useState([
    {
      sno:1,
      title:'item 1',
      desc: "desc 1",
    },
    {
      sno:2,
      title:'item 2',
      desc: "desc 2",
    },{
      sno:3,
      title:'item 3',
      desc: "desc 3"
    }
  ]);

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
