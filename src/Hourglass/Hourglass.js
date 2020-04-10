import React from 'react';
import './Hourglass.css';

class Hourglass extends React.Component {
    render() {
        return (
            <div className='flex-container wrap'>
                <div className='hourglass_container'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.23 114.58">

                        <g id="Layer_3" data-name="Layer 3">
                            <path className="hourglass_color" d="M421.6,286.37l-2-7.74c9.83-2.59,16.44-9.5,16.44-17.18V237H387v24.46c0,7.68,6.61,14.59,16.44,17.18l-2,7.74C388,282.83,379,272.82,379,261.45V229h65v32.46C444,272.82,435,282.83,421.6,286.37Z" transform="translate(-375.05 -225.95)" />
                            <path className="hourglass_color" d="M444,334.85H379V303.06c0-11.16,9-21,22.42-24.43l2,7.74c-9.82,2.54-16.42,9.24-16.42,16.69v23.79h49V303.06c0-7.45-6.6-14.15-16.42-16.69l2-7.74C435,282.09,444,291.9,444,303.06Z" transform="translate(-375.05 -225.95)" />
                            <ellipse className="hourglass_color"cx="28.45" cy="56.55" rx="4.5" ry="3.79" />
                            <ellipse className="hourglass_color" cx="44.71" cy="56.55" rx="4.5" ry="3.79" />
                        </g>
                        <g id="Layer_4" data-name="Layer 4">
                            <rect className="sand" x="14.19" y="75.13" width="44.39" height="24.78" />
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Hourglass;