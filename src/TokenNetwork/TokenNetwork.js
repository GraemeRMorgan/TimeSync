import React from 'react';
import anime from 'animejs';
import './TokenNetwork.css';


export class TokenNetwork extends React.Component {
    


    //First animation
    drawLineUL() {
        anime({
            targets: '.lines_toUL',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            endDelay: 500,
            delay: 500,
            loop: true,
            direction: 'alternate',

        });
    }

    //Second animation
    drawLineLL() {
        anime({
            targets: '.lines_toLL',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            endDelay: 500,
            delay: 500,
            loop: true,
            direction: 'alternate',

        });
    }

    //Third animation
    drawLineUR() {
        anime({
            targets: '.lines_toUR',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            endDelay: 500,
            delay: 500,
            loop: true,
            direction: 'alternate',

        });
    }

    //Fourth animation
    drawLineLR() {
        anime({
            targets: '.lines_toLR',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            endDelay: 500,
            delay: 500,
            loop: true,
            direction: 'alternate',

        });
    }

    animationController(){
        this.drawLineUL();
        setTimeout(() => {  this.drawLineLL(); }, 4000);
        setTimeout(() => {  this.drawLineUR(); }, 8000);
        setTimeout(() => {  this.drawLineLR(); }, 12000);
    }

    animationPreset(){
        anime({
            targets: ['.lines_toUL', '.lines_toLL', '.lines_toUR', '.lines_toLR'],
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            autoplay: false,
        });
    }

    



    componentDidMount(){
        // this.drawLineUL();
        // this.drawLineLL();
        // this.drawLineUR();
        // this.drawLineLR();
        //this.scaleCircleUL();
        // this.animationSet();
        this.animationController();
        this.animationPreset();
        
    }


    render() {
        return (
            <div className="flex-container wrap">
                <div className="tokenNet_container">


                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433.62 265.54">
                        <g id="nodes">
                            <circle id="circleUL" className="node_circles" cx="28.87" cy="28.87" r="28.37" />
                            <circle id="circleLL" className="node_circles" cx="28.87" cy="236.67" r="28.37" />
                            <circle id="circleUR" className="node_circles" cx="404.76" cy="28.87" r="28.37" />
                            <circle id="circleLR" className="node_circles" cx="404.76" cy="236.67" r="28.37" />
                        </g>
                        <g id="toUL">
                            <polyline className="lines_toUL" points="398.37 33.83 349.08 83.12 81.35 83.12 37.91 39.68" />
                            <polyline className="lines_toUL" points="404.05 237.38 270.71 104.05 90.57 104.05 31.71 45.18" />
                            <polyline className="lines_toUL" points="27.45 238.8 72.84 193.41 72.84 99.08 22.49 48.73" />
                        </g>
                        <g id="toLL">
                            <polyline className="lines_toLL" points="400.5 32.41 298.37 32.41 99.08 231.71 41.63 231.71" />
                            <polyline className="lines_toLL" points="401.92 237.38 266.46 101.92 124.61 243.76 40.22 243.76" />
                            <polyline className="lines_toLL" points="31.71 35.25 103.69 107.24 103.69 191.28 69.47 225.5 41.63 225.5" />
                        </g>
                        <g id="toUR">
                            <polyline className="lines_toUR" points="33.83 34.54 86.32 87.03 346.6 87.03 396.95 36.67" />
                            <polyline className="lines_toUR" points="39.51 231.71 171.42 99.79 339.51 99.79 399.79 39.51" />
                            <polyline className="lines_toUR" points="404.75 235.25 335.96 166.46 335.96 118.94 411.14 43.76" />
                        </g>
                        <g id="toLR">
                            <polyline className="lines_toLR" points="391.99 33.83 333.83 91.99 333.83 174.26 397.66 238.09" />
                            <polyline className="lines_toLR" points="39.51 34.54 257.24 34.54 316.46 93.76 316.46 174.97 385.43 243.94" />
                            <polyline className="lines_toLR" points="29.58 238.8 81.35 187.03 201.21 187.03 248.02 140.22 299.08 140.22 299.08 235.25 317.52 253.69 398.37 253.69" />
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default TokenNetwork;




    // scaleCircleUL(){
    //     anime({
    //         targets: '#circleUL',
    //         scale: 1.5,
    //         duration: 500, 
    //         delay: 100,
    //         loop: false,
    //         direction: 'alternate', 
    //         easing: 'cubicBezier(.5, .05, .1, .3)',
    //     })
    // }

    //Second animation