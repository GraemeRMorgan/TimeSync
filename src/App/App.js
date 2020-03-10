import React, { Component } from 'react';
import './App.css';
import { Clock } from '../Clock/Clock';
import { PauseButton } from '../PauseButton/PauseButton';
import { TimeNode } from '../TimeNode/TimeNode';
import { Motion } from '../Motion/Motion';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Synchronization</h1>
          <Motion />
          <PauseButton />
          <TimeNode />
          
          
          

        </header>
      </div>
    )
  }
}




export default App;
