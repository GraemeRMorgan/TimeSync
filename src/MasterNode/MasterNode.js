import React from 'react';
import './MasterNode.css';
import { AnimateKeyframes } from 'react-simple-animate';
import { Box } from '../Box/Box';


export class MasterNode extends React.Component {

    state = { play: true };

    render() {
        return (
            <div>
                <AnimateKeyframes
                    play
                    pause={this.state.pause}
                    duration={3}
                    keyframes={[
                        'transform: translateX(-300px)',
                        'transform: translateX(300px)',
                        'transform: translateX(-300px)',
                    ]}
                    iterationCount="infinite"
                    easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"

                >

                    <Box class='master_box'/>
                </AnimateKeyframes>

            
            </div>
        )
    }
}