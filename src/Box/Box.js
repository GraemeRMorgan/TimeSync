import React from 'react';
import './Box.css';
import { AnimateKeyframes } from 'react-simple-animate';
import { Sensor } from '../Sensor/Sensor';

/**
 * The purpose of this Component is to generate interactive Nodes that can be clicked and 
 * paused by the user. These nodes are used in the NodeGame Component. 
 */
export class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pause: false };
        this.togglePause = this.togglePause.bind(this);
    }

    togglePause() {
        const pauseState = this.state.pause === true ? false : true;
        this.setState({ pause: pauseState });
        console.log("Set Node Pause State in <Box />.");
    }

    /**
     * This method should monitor the position of the div and send this info
     * via props to <Sensor />. In that class we can monitor all of the collisions
     * to see if 
     */
    render() {
        return (
            <div className='flex-container wrap game_environment'>
                <AnimateKeyframes
                    play
                    pause={this.state.pause}
                    delay={this.props.delay}
                    duration={3}
                    keyframes={[
                        'transform: translateX(0px)',
                        'transform: translateX(590px)',
                        'transform: translateX(0px)',
                    ]}
                    iterationCount="infinite"
                    easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                >
                    <div className={this.props.className} onClick={this.togglePause} ></div>
                </AnimateKeyframes> 
            </div>
        )
    }
}
