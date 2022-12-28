import React from 'react'

const AddTodo = () => {
  return (
    <div className='container my-3'>
    <h3 className=''>Add a Todo</h3>
            <form>
                <div className= "m-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="m-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-ssm m-3">Add Todo</button>
        </form>
</div> 
  )
}

export default AddTodo
