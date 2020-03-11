import React from 'react';
import './Box.css';
import { AnimateKeyframes } from 'react-simple-animate';

export class Box extends React.Component {

    //state = { pause: false };
    constructor(props) {
        super(props);
        //this.state = { pause: false };

        //this.handleClick = this.handleClick.bind(this);

        this.state = { pause: false };
        this.togglePause = this.togglePause.bind(this);
    }

    togglePause() {
        const pauseState = this.state.pause == true ? false : true;
        this.setState({ pause: pauseState });
        console.log("worked");
    }



    //state = { play: true };
    state = { pause: false };


    render() {
        return (
            <div>
                <AnimateKeyframes
                    play
                    pause = {this.state.pause}
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
                                    <button className={this.props.className} onClick={this.togglePause}></button>

                </AnimateKeyframes>
            </div>
        )
    }
}


{/* <div className={this.props.className}>
</div> */}