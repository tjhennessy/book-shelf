import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function CategoryBanner(props) {
  const { shelfName } = props;
  return (
    <div>
      {shelfName !== '' &&
        <h2 className="bookshelf-title">{shelfName}</h2>
      }
    </div>
  )
}

CategoryBanner.propTypes = {
  shelfName: PropTypes.string.isRequired
}

export default CategoryBanner;
