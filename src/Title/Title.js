import React from 'react';
import anime from 'animejs';
import './Title.css';

/**
 * The purpose of this component is to Draw the Title of the App. The title was created
 * as a vector file and has been imported as an SVG. An SVG can be animated using Anime.js, 
 * which is why I am using SVG as opposed to a raster file, like a PNG or JPG. 
 */
class Title extends React.Component {
    
    /**
     * This animation function utilizes Anime.js to draw the title of the application
     * using the vector paths of the svg file. 
     */
    animation() {
        anime({
            targets: '.cls-1, .cls-2, .cls-3',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1000,
            delay: function (el, i) { return i * 250 },

        });
    }


    /**
     * This function ensures that the animation function mounts upon calling the Title 
     * component class. 
     */
    componentDidMount() {
        this.animation();
    }

    /**
     * The main render function returns the svg information of the vector for the tile
     * logo. This code is automatically generated when exporting a vector file as an 
     * svg. It has been cleaned up slightly and non-minimized for readability. 
     * 
     * The onClick handler will redo the animation whenenver the div is clicked. 
     */
    render() {
        return (
            <div>
                <div onClick={this.animation}>
                    <svg id="lines" viewBox="0 0 412.74 65.53">
                        <line className="cls-1" y1="2" x2="46.06" y2="2" />
                        <line className="cls-1" x1="22.84" y1="2.58" x2="22.84" y2="64.13" />
                        <line className="cls-1" x1="50.52" y1="63.74" x2="50.52" y2="1.61" />
                        <polyline className="cls-1" points="61.55 63.35 61.55 1.61 63.29 1.61 90.39 63.74 117.87 2.19 119.23 2.19 119.23 63.55" />
                        <polyline className="cls-1" points="170.71 2.39 130.84 2.39 130.84 63.16 171.48 63.16" />
                        <line className="cls-1" x1="131.03" y1="31.42" x2="168.97" y2="31.42" />
                        <path className="cls-1" d="M400.34,223.11s3.1-16.77-21.16-17.55-31,26.07.26,31.49c33.29,6.45,19.87,32.77-1.81,33s-21.42-20.9-21.42-20.9" transform="translate(-156.15 -205.05)" />
                        <polyline className="cls-1" points="249.1 1.81 274.06 37.03 298.84 1.42" />
                        <line className="cls-1" x1="274.06" y1="37.03" x2="274.06" y2="63.74" />
                        <polyline className="cls-1" points="303.1 63.55 303.1 2.19 304.84 2.19 347.81 63.35 348.97 63.35 348.97 2.39" />
                        <path className="cls-1" d="M566.85,224.85C554.66,189.44,513.43,208,514,239s42.38,47.23,54.38,6.39" transform="translate(-156.15 -205.05)" />
                    </svg>
                </div>

            </div >
        );
    }
}

//Export the Component Class Title for use outside of this file.
export default Title;
