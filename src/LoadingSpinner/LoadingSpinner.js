import React from 'react';
import anime from 'animejs';
import './LoadingSpinner.css';

class LoadingSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spinnerDuration: this.props.duration};
        this.setState ({spinnerDuration: this.props.duration});

        this.spinStart = this.spinStart.bind(this);
    }


    spinStart() {
        let setDuration = this.state.spinnerDuration;
          anime({
            targets: '#spinner_main_upper',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            //duration: setDuration,
            duration: 2000,
            loop: false,
        });
    }

   

    

    componentDidMount() {
        this.spinStart();
    }


    render() {
        return (
            <div>
                <h1>LoadingSpinner</h1>
                <div>
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="-25 -25 150 150">
                        <path id="spinner_main_under"className="spinner" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />  
                        <path id="spinner_main_upper"className="spinner" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                    </svg>

                </div>
            </div>
        );
    }
}

export default LoadingSpinner;