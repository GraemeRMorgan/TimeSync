import React from 'react';
import './App.css';
import Title from '../Title/Title';
import NodeGame from '../NodeGame/NodeGame';
import NodeGameDelay from '../NodeGameDelay/NodeGameDelay';
import NetworkMap from '../NetworkMap/NetworkMap';
import RTT from '../RTT/RTT';
import TokenNetwork from '../TokenNetwork/TokenNetwork';
import Hourglass from '../Hourglass/Hourglass';
import PingSim from '../PingSim/PingSim';
import PingSame from '../PingSame/PingSame'

/**
 * This is the driver function for the rest of the app. 
 * This structure is exported to the index.js file and is then
 * rendered in the browser. 
 * 
 * This fucntional component contains all of the primary components in the 
 * application. 
 */

function App() {

  return (
    <div>

      <div className='flex-container wrap hourglass'>
        <Hourglass />
      </div>

      <div className='flex-container wrap title'>
        {/*<Title />*/}
        <h1>Time Synchronization</h1>
      </div>

      <div className='flex-container wrap writing'>
      <hr className="coolLine"></hr>
        <h3>
        Have you ever considered the fact that every time you ask someone for the time, 
        they are actually lying? Perhaps not consciously lying, but their answer is always 
        incorrect. In the time that it takes someone to look at their watch, then look back 
        at you and answer your question, it is no longer the time it was when that individual 
        looked at their watch. Obviously this is not a problem as humans don't often tell the 
        time down to the millisecond. In distributed computing, accurately synchronizing time 
        is a fundamental for the system to function properly.         
        </h3>
      </div>

      <div className='flex-container wrap writing'>
      <hr className="coolLine"></hr>
      <h2 className='flex-container wrap subtitles'>Time Servers</h2>
        <h3>
        Consider the following network map. All of these nodes must ping a central time server 
        in order to maintain a synchronized clock throughout the system. Some of these nodes may 
        be thousands of miles apart. In the time that it takes a time server to send the time, it 
        could take several seconds for the message to reach the node.          
        </h3>
      </div>

      <div className='flex-container wrap simulation'>
        <NetworkMap />
      </div>

      <div className='flex-container wrap writing'>
      <hr className="coolLine"></hr>
      <h2 className='flex-container wrap subtitles'>Synchronization Game</h2>

        <h3>
        Below is a small interactive game that offers an abstraction of time synchronization. Consider 
        the purple blocks as nodes in a distributed system, and the green block is the time server. 
        Try to synchronize these nodes.       
        </h3>
        <h3>
        It's relatively simple, but as we'll see, there is added complexity when synchronizing nodes 
        to a time server.       
        </h3>
      </div>

      <div className='flex-container wrap game_1'>
        <NodeGame />
      </div>


      <div className='flex-container wrap writing'>
      <hr className="coolLine"></hr>
      <h2 className='flex-container wrap subtitles'>Return Trip Time</h2>

        <h3>
        The time to ping a server is known at the RTT (Round Trip Time). When a node is calculating 
        the time from a time server, they are not concerned with the RTT, but with RTT/2 as they only 
        wish to add the return trip to the time the server has sent.      
        </h3>
      </div>

      <div className='flex-container wrap rtt'>
        <RTT />
      </div>

      <div className='flex-container wrap writing'>
      <hr className="coolLine"></hr>
      <h2 className='flex-container wrap subtitles'>Ping</h2>

        <h3>
        This tool shows the time in ms a message takes to be sent and received from 3 different 
        servers around the world.      
        </h3>
      </div>
      
      <div className='flex-container wrap ping_sim'>
        <PingSim />
      </div>

      <div className='flex-container wrap writing'>
      <hr className="coolLine"></hr>
      <h2 className='flex-container wrap subtitles'>Ping Same</h2>

        <h3>
        The following tool is identical to the above tool, except this pings the exact same 
        server 3 times. You will notice that the results are slightly different. This shows 
        that there are always multiple paths on a network and there are changing obstacles 
        along the way. We calculate the current time at a node with the following 
        formula:
        </h3>
        <h2>Time = Time Server Time + RTT/2</h2>
        <h3>
        This introduces an issue with calculating the time using RTT/2 as this formula assumes 
        the time to reach a time server is the same time to return from the time server.     
        </h3>
      </div>

      <div className='flex-container wrap ping_same'>
        <PingSame />
      </div>

      <div className='flex-container wrap writing'>
      <hr className="coolLine"></hr>
      <h2 className='flex-container wrap subtitles'>Synchronization with Delay</h2>
        <h3>
        Now, try the same synchronization game, but this time the nodes have an associated delay. 
        This more accurately reflects the complexity of synchronizing nodes on a network.          
        </h3>
      </div>

      <div className='flex-container wrap game_1'>
        <NodeGameDelay />
      </div>

      <div className='flex-container wrap writing'>
      <hr className="coolLine"></hr>
      <h2 className='flex-container wrap subtitles'>Conclusion</h2>
        <h3>
        Distributed computing has several simple yet complex issues that offer outlets for continued 
        study and research. Time Synchronization is a fundamental challenge in distributed computing, 
        but is needed in order to maintain the integrity of the systems now and into the future.           
        </h3>
      </div>

      <div className='flex-container wrap token'>
        <TokenNetwork />
      </div>

    </div>
  )
}

export default App;
