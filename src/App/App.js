import React, { Component } from 'react';
import './App.css';
import { ChildNodes } from '../ChildNodes/ChildNodes';
import { MasterNode } from '../MasterNode/MasterNode';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Synchronization</h1>
          <MasterNode />
          <hr className="coolLine"></hr>
          <ChildNodes />
        </header>
      </div>
    )
  }
}




export default App;
