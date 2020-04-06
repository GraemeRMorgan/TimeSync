import React, { Component } from 'react';
import './App.css';
import Title from '../Title/Title';
import GraphDraw from '../GraphDraw/GraphDraw';
import NodeGame from '../NodeGame/NodeGame';
import NodeGameDelay from '../NodeGameDelay/NodeGameDelay';
import NetworkMap from '../NetworkMap/NetworkMap';
import RTT from '../RTT/RTT';
import TokenNetwork from '../TokenNetwork/TokenNetwork';
import Hourglass from '../Hourglass/Hourglass';

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
        <div>

          <div className='flex-container wrap hourglass'>
            <Hourglass />
          </div>

          <div className='flex-container wrap title'>
            <Title />
          </div>


          
          <div className='flex-container wrap token'>
            <TokenNetwork />
          </div>

          
          <div className='flex-container wrap rtt'>
            <RTT />
          </div>
    

          
          <div className='flex-container wrap simulation'>
            <NetworkMap />
          </div>

         
          <div className='flex-container wrap game_1'>
            <NodeGame />
          </div>
        
          
          <div className='flex-container wrap graph'>
            <GraphDraw />
          </div>
          
          
          
          <div className='flex-container wrap game_1'>
            <NodeGameDelay />  
          </div>
           {/*}
          */}
          
      
        </div>
      )
    }
  }

export default App;
