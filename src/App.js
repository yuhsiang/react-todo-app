import React, { Component } from 'react';

import TodoApp from './components/TodoApp';
import Action from './components/Action';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Todo App</h1>
        </header>
        <TodoApp />
      </div>
    );
  }
}

export default App;
