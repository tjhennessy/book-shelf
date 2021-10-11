import React from 'react';
import PropTypes from 'prop-types';

class MoveBook extends React.Component {
  state = {
    value: this.props.currentShelf
  }
  static propTypes = {
    handleChangeBookShelf: PropTypes.func.isRequired,
    currentShelf: PropTypes.string.isRequired
  }
  handleChange = (event) => {
    const selectedShelf = event.target.value;
    this.props.handleChangeBookShelf(selectedShelf);
  }
  render () {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default MoveBook;