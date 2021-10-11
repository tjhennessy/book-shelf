import React from 'react';
import PropTypes from 'prop-types';
import CategoryBanner from './CategoryBanner';
import BookCarousel from './BookCarousel';

function Bookshelf(props) {
  const { onChangeBookShelf, shelfName, books } = props;
  return (
    <div className="bookshelf">
      <CategoryBanner shelfName={shelfName} />
      <BookCarousel
        onChangeBookShelf={onChangeBookShelf}
        books={books}
      />
    </div>
  )
}

Bookshelf.propTypes = {
  onChangeBookShelf: PropTypes.func.isRequired,
  shelfName: PropTypes.string,
  books: PropTypes.array.isRequired
}

export default Bookshelf;