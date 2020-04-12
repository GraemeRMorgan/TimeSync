import React from 'react';
import anime from 'animejs';
import './GraphDraw.css';

/**
 * This Component draws a stylized network graph with nodes and various div objects
 * that act as the communication link between the time server and various nodes. 
 * 
 * This is simply an element for visualization purposes. 
 */
export class GraphDraw extends React.Component {
    
    /**
     * This function uses Anime.js to control the animation of the network graph.
     */
    animation() {
        anime({
            targets: '.nodeLine, .nodeDraw',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1000,
            delay: function (el, i) { return i * 250 },

        });
    }

    /**
     * This function uses Anime.js to control the nodes following the path of the 
     * network graph SVG. The animation is set to start automatically.
     */
    followPathAnimation(){
        let path = anime.path('#path1');
        anime({
            targets: '.boxy',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: 10000,
            loop: true
          });
    }

    /**
     * This ensures that all functions are loaded when the component is called.
     */
    componentDidMount() {
        this.animation();
        this.followPathAnimation();
    }

    /**
     * The render/return functions return the Vector SVG. The onClick will restarts the 
     * animation.
     */
    render() {
        return (
            <div>
                <div id='networkGraph' onClick={this.followPathAnimation}>
                    <svg id="graph1" viewBox="0 0 482.35 132.38">
                        <polyline id="path4" class="nodeLine" points="234.57 105.24 235.35 130.02 211.35 130.79 211.35 101.37 168.77 100.6 167.99 123.05 190.44 123.05" />
                        <polyline id="path3" class="nodeLine" points="284.22 76.61 355.35 75.05 351.48 53.37 406.44 54.15 407.22 66.53 428.89 66.53" />
                        <polyline id="path5" class="nodeLine" points="219.86 88.21 130.06 88.21 130.83 43.31 161.8 44.08 161.02 16.21 1.54 14.66 2.31 44.08 46.44 44.08 47.99 68.86 26.32 68.08" />
                        <polyline id="path2" class="nodeLine" points="281.02 92.08 280.25 116.86 256.25 116.08 256.25 128.47 299.6 130.79 297.28 95.95 336.77 95.18 337.54 109.11 317.41 109.89" />
                        <polyline id="path1" class="nodeLine" points="279.48 61.11 305.8 61.11 303.48 36.34 445.93 37.89 445.93 22.4 473.8 22.4 473.8 54.92" />
                        <path id="path6" class="nodeLine" d="M388.64,248H347.39V194.64H401.2l-.9-21.08h77.58v9.87" transform="translate(-169.9 -172.06)" />
                        <circle id="timeServer" class="nodeDraw" cx="251.71" cy="76.61" r="32.51" />
                        <circle id="node2" class="nodeDraw" cx="195.08" cy="123.13" r="6.28" />
                        <circle id="node4" class="nodeDraw" cx="433.54" cy="65.67" r="6.28" />
                        <circle id="node6" class="nodeDraw" cx="307.54" cy="16.75" r="6.28" />
                        <circle id="node1" class="nodeDraw" cx="22.58" cy="67.15" r="6.28" />
                        <circle id="node3" class="nodeDraw" cx="314" cy="111.09" r="6.28" />
                        <circle id="node5" class="nodeDraw" cx="474.57" cy="59.56" r="6.28" />
                        
                    </svg>
                    {/*<div className='boxy' onClick={this.followPathAnimation}></div>*/}

                </div>

            </div >
        );
    }
}
//  Return the GraphDraw Component Class for use outside of this file.
export default GraphDraw;
