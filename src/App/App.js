import React, { Component } from 'react';
import './App.css';
import { ChildNodes } from '../ChildNodes/ChildNodes';
import { MasterNode } from '../MasterNode/MasterNode';
import { Sensor } from '../Sensor/Sensor'
import { Box } from '../Box/Box';


/**
 * I think this app should do the following:
 * 
 * 1.) Count the amount of synchronized moves and draw a circle. 
 * 2.) Have a small popup menu where you can select difficulty. 
 * 3.) Background shifts color when you are synched. 
 * 4.) Animation on Title Text. (SVG Logo)
 * 5.) New Favicon.
 * DONE!
 * 
 * 
 * Note: 
 * 1.) I believe the logic for collisions needs to happen here!
 * 2.) How do we deal with difficulty? Might need 2 totally separate App 
 * classes?
 * 3.) How do we get the pause delay to work?
 */
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
          <ChildNodes className="box_1" delay={.3} getLocation={this.getLocation}/>
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
