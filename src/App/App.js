import React, { Component } from 'react';
import './App.css';
import { Clock } from '../Clock/Clock';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Synchronization</h1>
          <h2>
            Master Time
        <Clock />
          </h2>

          <div class="node-1">
            Node 1
          <Clock />
          </div>

          <div class="node-2">
            Node 2
          <Clock />
          </div>

          <div class="node-3">
            Node 3
          <Clock />
          </div>
        </header>
      </div>
    )
  };
}




export default App;
