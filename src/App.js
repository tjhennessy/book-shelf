import React from 'react';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    none: [], // temporarily stores removed books
    titles: new Set()
  }
  componentDidMount() {
    // TODO: do not update state with each book but build data structure then
    // when complete update state one time
    BooksAPI.getAll()
      .then((allBooks) => {
        allBooks.map((book) => (
          this.setState((prevState) => ({
            [book.shelf]: prevState[book.shelf].concat([book]),
            titles: prevState.titles.add(book.title),
          }))
        ))
      })
  }
  findBook = (bookShelf, title) => {
    let shelfName = ''
    bookShelf.forEach((book) => {
      if (book.title === title) {
        shelfName = book.shelf
      }
    })
    return shelfName
  }
  getBookShelfInfo = (title) => {
    let shelfName = ''
    shelfName = this.findBook(this.state.currentlyReading, title)
    if (shelfName !== '') return shelfName
    shelfName = this.findBook(this.state.wantToRead, title)
    if (shelfName !== '') return shelfName
    shelfName = this.findBook(this.state.read, title)
    return shelfName
  }
  isBookOnMainPage = (title) => {
    return this.state.titles.has(title)
  }
  changeBookShelf = (newShelf, book) => {
    const oldShelf = book.hasOwnProperty('shelf') ? book.shelf : 'none';
    if (newShelf !== book.shelf) {
      book.shelf = newShelf;
      this.setState((prevState) => ({
        [newShelf]: prevState[newShelf].concat([book]),
        [oldShelf]: prevState[oldShelf].filter((b) => {
          return b.title !== book.title
        })
      }))
      BooksAPI.update(book, newShelf);
    }
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <SearchBooks 
              getBookShelfInfo={this.getBookShelfInfo}
              isBookOnMainPage={this.isBookOnMainPage}
              onChangeBookShelf={this.changeBookShelf}
            />
          )} />
        <Route exact path="/" render={() => (
          <ListBooks 
            onChangeBookShelf={this.changeBookShelf}
            bannerName="MyReads" 
            // TODO: dynamically generate select form from below props
            bookShelves={[
              {name: "Currently Reading", books: this.state.currentlyReading},
              {name: "Want to Read", books: this.state.wantToRead},
              {name: "Read", books: this.state.read}
            ]} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
