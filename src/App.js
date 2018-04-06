import React, { Component } from 'react';
import { Button, Jumbotron, ListGroup } from 'react-bootstrap';
import { ListItem } from './ListItem';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Codess 2018 Workshop on React Web Apps</h1>
        </header>
        <ListGroup>
          <ListItem item="first item!" />
          <ListItem item="second item.." />
          <ListItem item="LAST ONE" />
        </ListGroup>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
