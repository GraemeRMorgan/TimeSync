import React from 'react';
import './NodeDelay.css';
import { MasterNode } from '../MasterNode/MasterNode';
import { BoxDelay } from '../BoxDelay/BoxDelay';


/**
 * This Componenet renders the synchronization model where there is a delay
 * on individual nodes. This more accurately models how time synchronization
 * works in practice and make synchronizing the nodes substatially more 
 * difficult. 
 */
class NodeDelay extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Synchronization with Delay</h1>
          <MasterNode />
          <hr className="coolLine"></hr>
          <BoxDelay className="static_node" id="spinner_1" delay={.3} />
          <BoxDelay className="static_node" id="spinner_2" delay={.5}/>
          <BoxDelay className="static_node" id="spinner_3" delay={.7}/>
        </header>
      </div>
    )
  }
}

export default NodeDelay;
