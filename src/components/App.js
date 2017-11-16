import React, { Component } from 'react';
import BookList from './BookList';
import BookDetail from './BookDetail';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
