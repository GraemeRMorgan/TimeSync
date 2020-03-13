import React from 'react';
import './Box.css';
import { AnimateKeyframes } from 'react-simple-animate';
import { Sensor } from '../Sensor/Sensor';

export class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pause: false };
        this.togglePause = this.togglePause.bind(this);
        this.turnOnPause = this.turnOnPause.bind(this);
    }

    togglePause() {
        const pauseState = this.state.pause == true ? false : true;
        this.setState({ pause: pauseState });
        console.log("worked");
    }

    //Trying to see if I can get a global pause to work.
    turnOnPause(){
        this.setState({pause:true});
    }

    //state = { pause: false };

    /**
     * This method should monitor the position of the div and send this info
     * via props to <Sensor />. In that class we can monitor all of the collisions
     * to see if 
     */
    render() {
        return (
            <div>
                <AnimateKeyframes
                    play
                    pause={this.state.pause}
                    //pause={this.togglePause}
                    delay={this.props.delay}
                    duration={3}
                    keyframes={[
                        'transform: translateX(0px)',
                        'transform: translateX(600px)',
                        'transform: translateX(0px)',
                    ]}
                    iterationCount="infinite"
                    easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"

                >
                    <div className={this.props.className} onClick={this.togglePause} pauseNow={this.turnOnPause}></div>

                </AnimateKeyframes>
                
                <Sensor />
            </div>
        )
    }

}
