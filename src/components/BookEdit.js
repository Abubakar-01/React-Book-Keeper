import React, { useState } from 'react'

function BookEdit({book,onFormSubmit}) {
  const [title,setTitle]=useState(book.title);
  const handleChange = (event)=>{
    setTitle(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault(); 
    
    onFormSubmit(book.id,title);
  }
  return (
    <div>
      <form className='book-edit' onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} className='input' onChange={handleChange}/>
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  )
}

export default BookEdit