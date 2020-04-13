import React from 'react';
import './NodeGame.css';
import { Box } from '../Box/Box';

/**
 * This Componenet renders a a game interpretation of time synchronization
 * with a time server. Users can click nodes to pause and continue their 
 * animation in an attempt to synchronize all nodes. 
 * 
 * This abstraction of time synchronization does not include RTT/2 which is
 * an integral component of synchronization on a distributed system.
 */
function NodeGame() {
    return (

        <div>
            <div>
                <h2 className='flex-container wrap instructions'>Click on the nodes to pause and play.</h2>
            </div>
            <div className="game_container">
                <Box className="master_box" />
                <hr className="coolLine"></hr>
                <Box className="box_1" delay={.3} />
                <Box className="box_2" delay={.5} />
                <Box className="box_3" delay={.7} />
            </div>
        </div>
    )
}
export default NodeGame;