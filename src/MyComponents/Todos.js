import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  
  return (
    <div className='container'>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length===0? <p className='text-center'>"No Todos to display"</p> :props.todos.map((todo)=>{
        return <TodoItem todo={todo}  key ={todo.sno} onDelete={props.onDelete}/>


        })
        }
    
      
    </div>
  ) 
}

export default Todos
