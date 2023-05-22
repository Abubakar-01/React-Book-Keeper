import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList"
import booksContext, {Provider} from "./context/books";


function App() {
  const {fetchBook} = useContext(booksContext)
  useEffect(()=>{
    fetchBook();
  },[])
  
  return (
   <div className="app">
    <h1>Reading List</h1>
    <BookList />
    <BookCreate/>
   </div>
  );
}

export default App;
