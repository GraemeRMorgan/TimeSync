import React, { Component } from 'react';
import './NodeDelay.css';
import { ChildNodes } from '../ChildNodes/ChildNodes';
import { MasterNode } from '../MasterNode/MasterNode';
import { Sensor } from '../Sensor/Sensor'
import { Box } from '../Box/Box';
import { BoxDelay } from '../BoxDelay/BoxDelay';


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
class NodeDelay extends React.Component {

  getLocation(node){
    let x = node.offsetLeft;
    console.log(x);
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Synchronization with Delay</h1>
          <MasterNode />
          <hr className="coolLine"></hr>
          <BoxDelay className="box_1" id="box_1" delay={.3} />
          <BoxDelay className="box_2" id="box_2" delay={.5}/>
          <BoxDelay className="box_3" id="box_3" delay={.7}/>
        </header>
      </div>
    )
  }
}




export default NodeDelay;
