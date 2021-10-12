import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './App.css';

class BookCarousel extends Component {
  static propTypes = {
    onChangeBookShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  handleChangeBookShelf = (selectedShelf, title) => {
    const [ book ] = this.props.books.filter((b) => {
      return b.title === title
    })
    this.props.onChangeBookShelf(selectedShelf, book);
  }
  getCoverImage = (book) => {
    return (book.hasOwnProperty('imageLinks') 
      ? book.imageLinks['smallThumbnail']
      : ''
    );
  }
  render() {
    const { books } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book 
                handleChangeBookShelf={this.handleChangeBookShelf}
                currentShelf={book.shelf}
                title={book.title}
                authors={book.authors}
                coverImageURL={this.getCoverImage(book)}
              />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default BookCarousel;