import React, { Component } from 'react';
import './App.css';
import { ChildNodes } from '../ChildNodes/ChildNodes';
import { MasterNode } from '../MasterNode/MasterNode';
import { Sensor } from '../Sensor/Sensor'
import { Box } from '../Box/Box';



class App extends React.Component {

  getLocation(node){
    let x = node.offsetLeft;
    console.log(x);
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Synchronization</h1>
          <MasterNode />
          <hr className="coolLine"></hr>
          <ChildNodes className="box_1" delay={.3} />
          <ChildNodes className="box_2" delay={.5}/>
          <ChildNodes className="box_3" delay={.7}/>
          <Sensor />
          <Box turnOnPause={true}/>
        </header>
      </div>
    )
  }
}




export default App;
