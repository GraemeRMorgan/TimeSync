import React from 'react';
import './NodeGameDelay.css';
import { BoxDelay } from '../BoxDelay/BoxDelay';
import { Box } from '../Box/Box'


/**
 * This Componenet renders the synchronization model where there is a delay
 * on individual nodes. This more accurately models how time synchronization
 * works in practice and make synchronizing the nodes substantially more 
 * difficult. 
 */
class NodeGameDelay extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>Time Synchronization with Delay</h1>
          <Box className="master_box" />

          <hr className="coolLine"></hr>

          <BoxDelay className="static_node" id="spinner_1" delay={.3} />
          <BoxDelay className="static_node" id="spinner_2" delay={.5}/>
          <BoxDelay className="static_node" id="spinner_3" delay={.7}/>
        </header>
      </div>
    )
  }
}
//Export the Component for use outside of this file.
export default NodeGameDelay;
