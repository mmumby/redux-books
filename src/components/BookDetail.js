import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div> Select a book to get started. </div>
    }

    return (
      <div className="book-details">
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div> Pages: {this.props.book.pages}</div>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  };
}

// const dispatchStateToProps = (dispatch) => {
//   return bindActionCreators({selectBook: selectBook}, dispatch)
// }

export default connect(mapStateToProps)(BookDetail);