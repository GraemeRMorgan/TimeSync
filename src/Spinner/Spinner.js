import React from 'react';
import anime from 'animejs';
import './Spinner.css';


export class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }


    animation() {
        anime({
            targets: '.cls-1, .cls-2, .cls-3',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1000,
            delay: function (el, i) { return i * 250 },

        });
    }

    followPathAnimation(){
        let path = anime.path('#path1');
        anime({
            targets: '.boxy',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: 1000,
            loop: true
          });
    }





    componentDidMount() {
        this.animation();
        //this.followPathAnimation();
    }

    render() {
        return (
            <div>



                {/*<div id='networkGraph' onClick={this.followPathAnimation}>
                    
                    <svg id="graph1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.35 132.38">

                        <polyline id="path4" class="cls-2" points="234.57 105.24 235.35 130.02 211.35 130.79 211.35 101.37 168.77 100.6 167.99 123.05 190.44 123.05" />
                        <polyline id="path3" class="cls-2" points="284.22 76.61 355.35 75.05 351.48 53.37 406.44 54.15 407.22 66.53 428.89 66.53" />
                        <polyline id="path5" class="cls-2" points="219.86 88.21 130.06 88.21 130.83 43.31 161.8 44.08 161.02 16.21 1.54 14.66 2.31 44.08 46.44 44.08 47.99 68.86 26.32 68.08" />
                        <polyline id="path2" class="cls-2" points="281.02 92.08 280.25 116.86 256.25 116.08 256.25 128.47 299.6 130.79 297.28 95.95 336.77 95.18 337.54 109.11 317.41 109.89" />
                        <polyline id="path1" class="cls-2" points="279.48 61.11 305.8 61.11 303.48 36.34 445.93 37.89 445.93 22.4 473.8 22.4 473.8 54.92" />
                        <path id="path6" class="cls-2" d="M388.64,248H347.39V194.64H401.2l-.9-21.08h77.58v9.87" transform="translate(-169.9 -172.06)" />
                        <circle id="timeServer" class="cls-3" cx="251.71" cy="76.61" r="32.51" />
                        <circle id="node2" class="cls-3" cx="195.08" cy="123.13" r="6.28" />
                        <circle id="node4" class="cls-3" cx="433.54" cy="65.67" r="6.28" />
                        <circle id="node6" class="cls-3" cx="307.54" cy="16.75" r="6.28" />
                        <circle id="node1" class="cls-3" cx="22.58" cy="67.15" r="6.28" />
                        <circle id="node3" class="cls-3" cx="314" cy="111.09" r="6.28" />
                        <circle id="node5" class="cls-3" cx="474.57" cy="59.56" r="6.28" />
                        
                    </svg>
                    <div className='boxy' onClick={this.followPathAnimation}></div>

                </div>
                */}

                <div className='drawShape' onClick={this.animation}>
                    <svg id="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.74 65.53">

                        <line class="cls-1" y1="2" x2="46.06" y2="2" />
                        <line class="cls-1" x1="22.84" y1="2.58" x2="22.84" y2="64.13" />
                        <line class="cls-1" x1="50.52" y1="63.74" x2="50.52" y2="1.61" />
                        <polyline class="cls-1" points="61.55 63.35 61.55 1.61 63.29 1.61 90.39 63.74 117.87 2.19 119.23 2.19 119.23 63.55" />
                        <polyline class="cls-1" points="170.71 2.39 130.84 2.39 130.84 63.16 171.48 63.16" />
                        <line class="cls-1" x1="131.03" y1="31.42" x2="168.97" y2="31.42" />
                        <path class="cls-1" d="M400.34,223.11s3.1-16.77-21.16-17.55-31,26.07.26,31.49c33.29,6.45,19.87,32.77-1.81,33s-21.42-20.9-21.42-20.9" transform="translate(-156.15 -205.05)" />
                        <polyline class="cls-1" points="249.1 1.81 274.06 37.03 298.84 1.42" />
                        <line class="cls-1" x1="274.06" y1="37.03" x2="274.06" y2="63.74" />
                        <polyline class="cls-1" points="303.1 63.55 303.1 2.19 304.84 2.19 347.81 63.35 348.97 63.35 348.97 2.39" />
                        <path class="cls-1" d="M566.85,224.85C554.66,189.44,513.43,208,514,239s42.38,47.23,54.38,6.39" transform="translate(-156.15 -205.05)" />
                    </svg>



                </div>

            </div >
        );
    }
}

export default Spinner;
