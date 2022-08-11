import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo.js';

function App() {
  let onDelete =(todo)=>{
    let snoDelete=todo.sno;

  }

  let todos = [
    {
      sno:1,
      title:'item 1',
      desc: "desc 1"
    },
    {
      sno:2,
      title:'item 2',
      desc: "desc 2"
    },{
      sno:3,
      title:'item 3',
      desc: "desc 3"
    }
  ]

  return (
    <div>
      <Header />
      <Todo todos={todos} onDelete={onDelete}/>
      <About/>
      <Footer />
    </div>
  );
}

export default App;
