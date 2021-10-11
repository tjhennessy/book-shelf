import React from 'react';
import PropTypes from 'prop-types';
import Banner from './ListBooksBanner';
import Bookshelf from './Bookshelf';
import AddBook from './AddBook';

function ListBooks(props) {
  const { onChangeBookShelf, bannerName, bookShelves } = props;
  return (
    <div className="list-books">
      <Banner name={bannerName}/>
      <div className="list-books-content">
        <ul style={{listStyleType: "none"}}>
          {bookShelves.map((bookshelf) => (
            <li key={bookshelf.name}>
              <Bookshelf
                onChangeBookShelf={onChangeBookShelf}
                shelfName={bookshelf.name}
                books={bookshelf.books}
              />
            </li>
          ))}
        </ul>
      </div>
      <AddBook />
    </div>
  )
}

ListBooks.propTypes = {
  onChangeBookShelf: PropTypes.func.isRequired,
  bannerName: PropTypes.string.isRequired,
  bookShelves: PropTypes.array.isRequired
}

export default ListBooks;