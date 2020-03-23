import React from 'react';
import './Simulation.css';
import { Box } from '../Box/Box';
import anime from 'animejs';

/**
 * This component will drive the Primary Simulation Component of this
 * project which aims to illustrate Christian's Algorithm for time 
 * synchronization. All elements will be contained in this file, as 
 * this will allow location information to be tracked. 
 */

export class Simulation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { play: true};
        this.timeServerController = this.timeServerAnimation();

        //Bind functions
        this.timeServerAnimation = this.timeServerAnimation.bind(this);
        this.toggleAnimation = this.toggleAnimation.bind(this);
    }

    /**
     * This function is responsible for the primary looping animation
     * of the Nodes.
     */
    timeServerAnimation() {
        let timeServer = anime({
            targets: '.time_server',
            translateX: 600,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            duration: 2000,
            autoplay: true
        });

        return timeServer;
    }


    // Toggle animation of the node.
    toggleAnimation() {
        this.timeServerController.pause();
        
    }

    getTime(){
    }

    


    // Node 1 Animation
    closeNodeAnimation() {
        anime({
            targets: '#closeNode',
            translateX: 600,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            duration: 2200
        });
    }

    /**
     * Mount the enclosed functions when this componenet is called.
     */
    componentDidMount(){
        this.timeServerAnimation();
        this.closeNodeAnimation();
        this.toggleAnimation();
        this.getTime();
    }



    render() {

        return (
            <div className='sim_control'>
                <div className='time_server'></div>
                <hr className="coolLine"></hr>
                <div className='node' id='closeNode' delay='.3'></div>
                <div className='time'>{this.getTime}</div>
            </div>
        );
    }
}

//Export the Component for use outside of this file. 
export default Simulation;

