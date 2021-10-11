import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function AddBook(props) {
  return (
    <Link to='/search'>
      <div className="open-search">
        <button>Add Book</button>
      </div>
    </Link>
  )
}

export default AddBook;