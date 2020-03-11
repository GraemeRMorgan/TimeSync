import React from 'react';
import './ChildNodes.css';
import { AnimateKeyframes } from 'react-simple-animate';
import { Box } from '../Box/Box';

export class ChildNodes extends React.Component {

  
    state = { play: true };
    state = { pause: false };

   



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
                    <Box class='box'/>
                </AnimateKeyframes>
                <button onClick={() => this.setState(({ pause }) => ({ pause: !pause }))}>
                    Play/Pause
                </button>
            </div>
        )
    }
}

//<button onClick={() => this.setState(({ pause }) => ({ pause: !pause }))}>