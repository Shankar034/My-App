import React from 'react'
import { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Titlel or Description cannot be blank ");
        }
        else
        {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
  return (
    <div className='container my-3'>
    <h3 className=''>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className= "m-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)    
                    }} id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="m-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)    
                    }} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm m-3">Add Todo</button>
        </form>
</div> 
  )
}

export default AddTodo
