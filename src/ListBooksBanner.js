import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Banner(props) {
  const { name } = props;
  return (
    <div className="list-books-title">
      <h1>{name}</h1>
    </div>
  )
}

Banner.propTypes = {
  name: PropTypes.string.isRequired
}

export default Banner;
