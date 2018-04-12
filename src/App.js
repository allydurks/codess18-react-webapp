import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* 
* Components in React always begin with a capital letter because
* DOM objects (regular divs, imgs, etc) begin with lowercase letters,
* and the uppercase indicates to the web app that it is a react component. 
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
