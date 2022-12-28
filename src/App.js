
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, {useState} from 'react';


function App() {

 
  const onDelete = (todo)=>{
    console.log("I am onDelete",todo);
    let index = todos.indexOf(todo);
    todos.splice(index,1);
  
 }

 const [todos, setTodos] = useState(
  [
    {
      sno:1,
      title: "GO to the market",
      desc:"You need to go to the market to get this job done"

    },
    {
      sno:2,
      title: "GO to the Mall",
      desc:"You need to go to the market to get this job done"

    },
    {
      sno:3,
      title: "GO to the Supermarket",
      desc:"You need to go to the market to get this job done"

    }
  ]);
  return (
    <>
    <Header title="My Todos list" searchBar={false}/>
    <Todos todos ={todos} onDelete={onDelete}/>

    <Footer/>
    </>
  );
}

export default App;
