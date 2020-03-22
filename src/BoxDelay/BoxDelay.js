import React from 'react';
import './BoxDelay.css';
import { AnimateKeyframes } from 'react-simple-animate';
import anime from 'animejs';
/**
 * The purpose of this Component is to generate interactive Nodes that can be clicked and 
 * paused by the user. These nodes are used in the NodeDelay Component and contain a visual
 * meter that corresponds to the delay that the node will take to receive a command from the
 * user.
 */

export class BoxDelay extends React.Component {

    /**
     * The main constructor for this Component. Functions must be bound in the constructor. 
     * 
     * Pause is defaulted to false so that the nodes will move.
     * incomingDelay is simply here to make the code more readable. It could have also been
     * called using 'this.props.delay' as the delay is sent in the div from the NodeDelay 
     * component.
     */
    constructor(props) {
        super(props);
        this.state = { pause: false};
        this.incomingDelay = this.props.delay;

        //These are the functions within this component.
        this.togglePause = this.togglePause.bind(this);
        this.loadingDiv = this.loadingDiv.bind(this);
        this.resumeAnimation = this.resumeAnimation.bind(this);
    }


    /**
     * This function is the primary Event Handler for the onClick event called in the outer
     * div in the render function at the bottom of this file. This is a simple function that
     * sets the pause state. If the state is TRUE, then is calls loadingDiv() and runs the 
     * delay for the animation.
     */
    togglePause() {
        if(this.state.pause === false){
            this.setState({ pause: true}); 
        }else{
            this.loadingDiv();
            setTimeout(() => {  this.resumeAnimation(); }, this.props.delay*1000);
        }
    }

    /**
     * setTimeout() expects a function and resumeAnimation() simply sets the pause state after
     * the delay. 
     */
    resumeAnimation(){
        this.setState ({ pause: false});
    }

    /**
     * This function changes the <div className> to allow a dynamic animation to show 
     * the time left in the delay on the specific node.
     */
    loadingDiv(){
        let tempDelay = this.props.delay*1000;
        let tempNodeId = document.getElementById(this.props.id);
        
        /**
         * The anime.js library is used for the animation on the spinner. More documentation for 
         * this library can be found at https://github.com/juliangarnier/anime/
         */ 
        anime({
            targets: tempNodeId,
            rotate: '+=360deg',
            easing: 'linear',
            duration: tempDelay,
            loop: false,
        });
    }


    /**
     * This render function controls the animation for the Nodes using the <AnimatedKeyframes/> 
     * external component. This animates the nodes 600px from -300px to +300px, which is set in
     * the CSS for the outer div. 
     * 
     * In the jsx, the outer div is the animated node and the inner div is the spinner wheel. 
     * 
     * The main feature of this render function is the onClick handler in the outer div. This calls
     * the togglePause() function which drives the delay and spinner wheel.
     */
    render() {
        return (
            <div>
                <AnimateKeyframes
                    play 
                    pause={this.state.pause}
                    delay={this.incomingDelay}
                    duration={3}
                    keyframes={[
                        'transform: translateX(0px)',
                        'transform: translateX(600px)',
                        'transform: translateX(0px)',
                    ]}
                    iterationCount="infinite"
                    easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                >
                    <div className={this.props.className} onClick={this.togglePause}>
                        <div id={this.props.id}></div>
                    </div>
                </AnimateKeyframes>
            </div>
        )
    }

}



