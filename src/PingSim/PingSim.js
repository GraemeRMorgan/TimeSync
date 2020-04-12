import React from 'react';
import './PingSim.css';
import Ping from 'ping.js';
import anime from 'animejs';

/**
 * This component is the same as PingSame.js except that PingSim.js pings
 * multiple servers instead of the same point. 
 */
class PingSim extends React.Component {
    constructor(props) {
        super(props);
        /**
         * The Ping library allows us to ping websites, the Ping object 
         * returns the RTT.
         */
        this.p = new Ping();

        this.state = {
            wikipedia: 0,
            unbc: 0,
            kings: 0
        };
        this.spinSetup = this.spinSetup.bind(this);
        this.spinDriver = this.spinDriver.bind(this);
        this.spinStart = this.spinStart.bind(this);
        this.spinStart2 = this.spinStart2.bind(this);
        this.spinStart3 = this.spinStart3.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * This handleClick() drives the Ping library. At the end of this block, 
     * the function runs a 1000ms timeout and calls spinDriver() to display
     * the RTT on spinners.
     */
    handleClick() {
        this.p.ping("https://www.wikipedia.com/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ wikipedia: data });
            }
        })

        this.p.ping("https://www.unbc.ca/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ unbc: data });
            }
        })


        this.p.ping("https://www.kcl.ac.uk/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ kings: data });
                setTimeout(() => {  this.spinDriver(); }, 1000);
            }
        })

    }


    /**
     * This function starts all spinners together. 
     */
    spinDriver() {
        setTimeout(() => {  this.spinStart(); }, this.props.delay*3000);
        setTimeout(() => {  this.spinStart2(); }, this.props.delay*3000);
        setTimeout(() => {  this.spinStart3(); }, this.props.delay*3000);
    }


    /**
     * The next few functions are animation drivers that run the spinners.
     * The setDuration if/else ensures that the spinners will only loop a limited
     * times in the event that the RTT is excedingly large. 
     */
    spinStart() {
        let setDuration = 0;
        if(this.state.wikipedia < 320){
            setDuration = this.state.wikipedia;
        }else{
            setDuration = 320 - this.state.wikipedia;
        }
        
        anime({
            targets: '#ping1',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            duration: 1000,
            loop: false,
        });
    }

    spinStart2() {
        let setDuration = 0;
        if(this.state.unbc < 320){
            setDuration = this.state.unbc;
        }else{
            setDuration = 320 - this.state.unbc;
        }
        
        anime({
            targets: '#ping2',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            duration: 1000,
            loop: false,
        });
    }
    spinStart3() {
        let setDuration = 0;
        if(this.state.kings < 320){
            setDuration = this.state.kings;
        }else{
            setDuration = 320 - this.state.kings;
        }
       
        anime({
            targets: '#ping3',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            duration: 1000,
            loop: false,
        });
    }


    // This is the default position for the spinners. 
    spinSetup(){
        anime({
            targets: '#ping1, #ping2, #ping3',
            strokeDashoffset: [anime.setDashoffset, 320],
            easing: 'linear',
            duration: 0,
            loop: false,
            autoplay:true
        }); 
    }

    componentDidMount() {
        this.spinSetup();
    }



    /**
     * The render function returns the RTT times, as well as a visual 
     * representation of the RTT.
     */
    render() {
        return (
            <div>
                <button className="button button_ping" onClick={this.handleClick}>Ping Servers</button>

                <ul>
                    <li className='server_list'>Server 1 RTT: <span>{this.state.wikipedia}</span> ms</li>
                    <li className='server_list'>Server 2 RTT: <span>{this.state.unbc}</span> ms</li>
                    <li className='server_list'>Server 3 RTT: <span>{this.state.kings}</span> ms</li>
                </ul>
                <div >
                    <div className="flex-container wrap">
                        <div id="site1" className="clocks1">
                        <h2>Ping 1</h2>
                            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="-25 -25 150 150">
                                <path className="spinner_main_under" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                                <path id="ping1" className="spinner_main_upper" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                            </svg>
                        </div>
                        <div id="site2" className="clocks1">
                        <h2>Ping 2</h2>
                            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="-25 -25 150 150">
                                <path className="spinner_main_under" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                                <path id="ping2" className="spinner_main_upper" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                            </svg>
                        </div>
                        <div id="site3" className="clocks1">
                        <h2>Ping 3</h2>
                            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="-25 -25 150 150">
                                <path className="spinner_main_under" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                                <path id="ping3" className="spinner_main_upper" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PingSim;