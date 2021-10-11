import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import './App.css';

//   NOTES: The search from BooksAPI is limited to a particular set of search terms.
//   You can find these search terms here:
//   https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

//   However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
//   you don't find a specific author or title. Every search is limited by search terms.

export default class SearchBooks extends Component {
  state = {
    value: ''
  }
  static propTypes = {
    onChangeBookShelf: PropTypes.func.isRequired,
    getSearchBooksResults: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }
  handleChange = (event) => {
    const val = event.target.value;
    this.setState((prevState) => ({
      value: val
    }))
    if (val !== '') {
      this.props.getSearchBooksResults(val)
    }
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>
        {(this.props.books.length > 0 && this.state.value !== '') &&
          <Bookshelf 
            onChangeBookShelf={this.props.onChangeBookShelf}
            shelfName={''}
            books={this.props.books}
          />
        }
      </div>
    )
  }
}
