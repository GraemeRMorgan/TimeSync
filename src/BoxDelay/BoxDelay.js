import React from 'react';
import './BoxDelay.css';
import { AnimateKeyframes } from 'react-simple-animate';
import { Sensor } from '../Sensor/Sensor';

export class BoxDelay extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pause: false, static: true};
        this.incomingDelay = this.props.delay;
        this.togglePause = this.togglePause.bind(this);
        this.loadingDiv = this.loadingDiv.bind(this);
        this.delayDiv = this.delayDiv.bind(this);
        this.resumeAnimation = this.resumeAnimation.bind(this);
    }


    /**
     * I left off on this section. I am trying to get a delay working and also want to have 
     * and editable <div> where I can animate the css of the component. 
     */
    togglePause() {

        let pauseState = this.state.pause;

        if(pauseState === false){
            pauseState = true;  
            //this.loadingDiv();  
            //this.delayDiv(); 
        }else{
            //pauseState = false;
            this.delayDiv();
            this.loadingDiv();
        }

        this.setState({ pause: pauseState });
        console.log("Box Element Pause in <BoxDelay/>");
    }


    loadingDiv(){
        console.log("Loading Div called.");
        this.setState ({ static: !this.state.static });
    }

    delayDiv(){
        
        console.log("Delay Div called.");
        this.setState ({ makeDelay: true});
        this.incomingDelay=this.props.delay;

        console.log("Hello");
        setTimeout(() => {  this.resumeAnimation(); }, 2000);

    }

    resumeAnimation(){
        let pauseState = this.state.pause;
        pauseState = false;
        this.setState ({ pause: pauseState});

    }





    /**
     * This method should monitor the position of the div and send this info
     * via props to <Sensor />. In that class we can monitor all of the collisions
     * to see if 
     */
    render() {
        let node_class = this.state.static ? "static_node" : "animated_node";

        return (
            <div>
                <AnimateKeyframes
                    play 
                    pause={this.state.pause}
                    //pause={this.togglePause}
                    delay={this.incomingDelay}
                    //delay={this.state.delay}
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
                        <div className={node_class}></div>
                    </div>

                </AnimateKeyframes>

                <Sensor />
            </div>
        )
    }

}
