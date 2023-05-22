import React, { useState,useContext } from 'react'
import BookEdit from "./BookEdit"
import booksContext from '../context/books'


function BookShow({book}) {
 
  const [showEdit, setShowEdit] = useState(false);
  const {deleteBookById} = useContext(booksContext)
  const handleDeleteClick =  () =>{
    deleteBookById(book.id)
  }
  const handleEditClick = ()=>{
    setShowEdit(!showEdit);
  }
  const formSubmit = ()=>{
    setShowEdit(!showEdit)
  }

  let content= <h3>{book.title}</h3>;
  if(showEdit===true){
    content=<BookEdit book={book}  onFormSubmit={formSubmit}/>
  }
  return (
    <div className='book-show'>
    <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} /> 
    <div>{content}</div>
    <div className='actions'>
      <button className='edit' onClick={handleEditClick}>Edit</button>
      <button className='delete' onClick={handleDeleteClick}>Delete</button>
    </div>
    </div>
  )
}

export default BookShow