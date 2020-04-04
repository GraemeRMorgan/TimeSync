import React from 'react';
import './Simulation.css';
import anime from 'animejs';

/**
 * This component will include a TIMESERVER that includes
 * the current time and a node that wishes to receive the current time.
 * 
 * onClick of the node, it wil delay, then display the time. During this
 * time, the timeServer time will increase.  
 */

export class Simulation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { timeServerTime: 12 };


        this.increaseTime = this.increaseTime.bind(this);
        this.commAnimation = this.commAnimation.bind(this);
        this.countUp = this.countUp.bind(this);
    }

    /**
     * This is our base for working. When we click on the node, we can include a delay 
     * that will control some simply animation from the ts to the node. During this time
     * the time on the ts will increase, but the old time will display on the node. Not good. 
     */
    
    increaseTime() {
        setTimeout(() => { this.countUp(); }, 1000);
    }

    countUp() {
        let currentTime = this.state.timeServerTime;
        currentTime++;
        this.setState({ timeServerTime: currentTime });
        this.increaseTime();
    }

    countUpStop(){

    }

    /**
     * Animation to control the communication signal.
     */
    commAnimation() {
        let commAnime = anime({
            targets: '.commSignal',
            left: '240px',
            loop: 1,
            backgroundColor: '#22D970',
            borderRadius: ['0%', '50%'],
            easing: 'easeInOutQuad'
        });
    }


    /**
     * Mount the enclosed functions when this componenet is called.
     */
    componentDidMount() {
        //this.increaseTime();
        //this.commAnimation();
    }


    render() {
        return (
            <div className='sim_control'>
                <div className='time_server'>
                    <h1>{this.state.timeServerTime}</h1>
                </div>
                <div className='commSignal'></div>
                <div className='node' onClick={this.increaseTime}>
                    <h1>{this.state.timeServerTime - 2}</h1>
                </div>
            </div>
        );
    }
}

//Export the Component for use outside of this file. 
export default Simulation;

