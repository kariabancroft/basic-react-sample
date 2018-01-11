import React, { Component } from 'react';
import './App.scss';
import Main from './components/main';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main/>
      </div>
    );
  }
}

export default App;
