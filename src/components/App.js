import React, { Component } from 'react';
import BookList from './BookList';
import BookDetail from './BookDetail';
import '../styles/App.css';
import { Input } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
