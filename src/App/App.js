import React, { Component } from 'react';
import './App.css';
import Title from '../Title/Title';
import GraphDraw from '../GraphDraw/GraphDraw';
import NodeGame from '../NodeGame/NodeGame';
import NodeGameDelay from '../NodeGameDelay/NodeGameDelay';


/**
 * This is the 'Driver' componenet for the rest of the app. 
 * This structure is exported to the index.js file and is then
 * rendered in the browser. 
 * 
 * This component contains all of the primary components in the 
 * application. 
 */

  class App extends React.Component{

    render() {
      return (
        <div >
          <Title />
          <GraphDraw />
          <NodeGame />
          <NodeGameDelay />  
        </div>
      )
    }
  }

export default App;
