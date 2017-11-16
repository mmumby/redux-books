import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Segment} from 'semantic-ui-react';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
          <Segment
              onClick={() => this.props.selectBook(book)}
              key={book.title}>
              {book.title}
          </Segment>
        );
    });
  }

  render() {
    return (
        <Segment.Group compact className="book-list">
          {this.renderList()}
        </Segment.Group>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

const dispatchStateToProps = (dispatch) => {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, dispatchStateToProps)(BookList);
