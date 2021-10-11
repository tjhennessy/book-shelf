import React from 'react';
import PropTypes from 'prop-types';
import MoveBook from './MoveBook';
import './App.css';

function Book(props) {
  const { handleChangeBookShelf, currentShelf, title, authors, coverImageURL } = props;
  const styleObj = { 
    width: 128,
    height: 193,
    backgroundImage: `url(${coverImageURL})`
  }
  const handleShelfChange = (newShelf) => {
    handleChangeBookShelf(newShelf, title);
  }
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={styleObj}></div>
        <MoveBook 
          handleChangeBookShelf={handleShelfChange}
          currentShelf={currentShelf}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors !== undefined && 
          authors.map((author) => (<p key={author} style={{margin: 0}}>{author}</p>))
        }
      </div>
    </div>
  )
}

Book.propTypes = {
  handleChangeBookShelf: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  coverImageURL: PropTypes.string.isRequired
}

export default Book;