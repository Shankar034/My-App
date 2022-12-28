import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.map((todo)=>{
        return <TodoItem todo={todo}  key ={todo.sno} onDelete={props.onDelete}/>


      })}
    {/* <TodoItem todo={props.todos[0]}/> */}
      
    </div>
  ) 
}

export default Todos
