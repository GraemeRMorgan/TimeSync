import React from 'react';
import './BoxDelay.css';
import { AnimateKeyframes } from 'react-simple-animate';
import { Sensor } from '../Sensor/Sensor';
import anime from 'animejs';

export class BoxDelay extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pause: false, static: true};
        this.incomingDelay = this.props.delay;
        this.togglePause = this.togglePause.bind(this);
        this.loadingDiv = this.loadingDiv.bind(this);
        this.delayDiv = this.delayDiv.bind(this);
        this.resumeAnimation = this.resumeAnimation.bind(this);
        this.animeTest = this.animeTest.bind(this);
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
            //this.loadingDiv();
        }

        this.setState({ pause: pauseState });
        console.log("Box Element Pause in <BoxDelay/>");
    }


    /**
     * This function changes the <div className> to allow a dynamic animation to show 
     * the time left in the delay on the specific node.
     */
    loadingDiv(){
        console.log("Loading Div called.");
        //this.animeTest();
        //this.setState ({ static: !this.state.static });
        //let tempNode = document.getElementsByClassName("static_node");
        let tempDelay = this.props.delay*1000;
        //let tempNode = document.getElementsByClassName("loading_spinner");
        let tempNode = document.getElementsByClassName("loader blur");
        let tempNodeId = document.getElementById(this.props.id);
        
        //Keep in mind that this is working just fine. 
        // anime({
        //     targets: tempNodeId,
        //     rotate: '+=360deg',
        //     easing: 'linear',
        //     duration: tempDelay,
        //     loop: false,
        // });

        anime ({
            targets: tempNode,
            keyframes: [
                {scale: 1},
                {scale: 3},
                {scale: 1}
              ],
            duration: tempDelay,
            loop: false,
            elasticity: 600,
            easing: 'easeInQuad',
        });
        
    }

    //This will delay the Node before it moves after being paused.
    delayDiv(){
        
        console.log("Delay Div called.");
        //this.setState ({ makeDelay: true});
        //this.incomingDelay=this.props.delay;
        
        this.loadingDiv();
        setTimeout(() => {  this.resumeAnimation(); }, this.props.delay*1000);

        
        //this.animeTest();
        //setTimeout(() => {  this.resumeAnimation(); }, this.props.delay*1000);
        


        //this.resumeAnimation();
        //this.loadingDiv();
    


        //this.animeTest();
        //setTimeout(() => {  this.resumeAnimation(); }, this.props.delay*1);

        
    }

    //This is a helper function that is called in a setTimeout() or js 'delay' function.
    resumeAnimation(){
        let pauseState = this.state.pause;
        pauseState = false;
        this.setState ({ pause: pauseState});
        //this.animeTest();
        //this.loadingDiv();

    }


    animeOpacity(){

    }

    //Testing animejs
    animeTest(){
        console.log("In animeTest");
        //let testNode2 = document.getElementById("nodey")
        let testNode2 = document.getElementsByClassName("static_node");
        let currentDelay = this.props.delay*1000;
     
        anime({
            targets: testNode2,
            
              scaleX: [
                { value: .2, duration: 100, delay: currentDelay, easing: 'easeOutExpo' },
                { value: 1, duration: 900 },
                
              ],
            //   rotate: {
            //     value: 360,
            //     duration: currentDelay,
            //     easing: 'easeInOutSine'
            //   },
             
              easing: 'easeOutElastic(1, .8)',
              loop: false
          });

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
                    <div className={node_class} id="nodey" onClick={this.togglePause}>
                        <div className='center'>
                        <div className='loader blur'>
                        <div className="circle circle-1" id="circle circle-1"></div>
                        </div>
                        </div>
                    </div>
                    

                </AnimateKeyframes>

                <Sensor />
            </div>
        )
    }

}


//<div className={"loading_spinner"} id={this.props.id}></div>
