import React from 'react';
import './PingSame.css';
import Ping from 'ping.js';
import anime from 'animejs';

/**
 * This component shows that there are multiple routes to the same server
 * and this fact affects network speeds. 
 * 
 * This calls the same UNBC server and each time the RTT has a different RTT.
 * 
 * The intention is to show that average RTT's will always be unreliable.
 */
class PingSame extends React.Component {
    constructor(props) {
        super(props);

        this.p = new Ping();

        this.state = {
            unbc1: 0,
            unbc2: 0,
            unbc3: 0,
            serverTime: 12
        };
        this.spinSetup = this.spinSetup.bind(this);
        this.spinDriver = this.spinDriver.bind(this);
        this.spinStart = this.spinStart.bind(this);
        this.spinStart2 = this.spinStart2.bind(this);
        this.spinStart3 = this.spinStart3.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // This function pings the same UNBC server 3 times. 
    handleClick() {
        this.p.ping("https://www.unbc.ca/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ unbc1: data });
            }
        })

        this.p.ping("https://www.unbc.ca/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ unbc2: data });
            }
        })


        this.p.ping("https://www.unbc.ca/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ unbc3: data });
                /**
                 * After 3 pings and a delay of 500ms, spinDriver() is called and runs the 
                 * visual spinners.
                 */
                setTimeout(() => { this.spinDriver(); }, 500);
            }
        })
    }

    // Drives the spinners. 
    spinDriver() {
        setTimeout(() => { this.spinStart(); }, this.props.delay * 3000);
        setTimeout(() => { this.spinStart2(); }, this.props.delay * 3000);
        setTimeout(() => { this.spinStart3(); }, this.props.delay * 3000);
    }

    /**
     * The following 3 functions animate the spinners based on the values from the 
     * state in the constructor for unbc1,2,3.
     */
    spinStart() {
        let setDuration = 320 - this.state.unbc1;
        anime({
            targets: '#ping_same1',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            duration: 1000,
            loop: false,
        });
    }
    spinStart2() {
        let setDuration = 320 - this.state.unbc2;

        anime({
            targets: '#ping_same2',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            duration: 1000,
            loop: false,
        });
    }
    spinStart3() {
        let setDuration = 320 - this.state.unbc3;
        anime({
            targets: '#ping_same3',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            duration: 1000,
            loop: false,
        });
    }


    // This sets the default position of the spinners.
    spinSetup() {
        anime({
            targets: '#ping_same1, #ping_same2, #ping_same3',
            strokeDashoffset: [anime.setDashoffset, 320],
            easing: 'linear',
            duration: 0,
            loop: false,
            autoplay: true
        });
    }

    // This is called when the component is rendered.
    componentDidMount() {
        this.spinSetup();
    }

    /**
     * This renders the final visual. Some calculations are done in the JSX code. On lines 147 to 149, the 
     * RTT/2 is calculated in the <li> elements rather than calling a function.
     */
    render() {
        return (
            <div>
                <button className="button button_ping_same" onClick={this.handleClick}>Ping Server</button>

                <div className="flex-container wrap">
                    <div className="list_server">
                        <ul>
                            <li className='server_list'>Ping 1 RTT: <span>{this.state.unbc1}</span> ms</li>
                            <li className='server_list'>Ping 2 RTT: <span>{this.state.unbc2}</span> ms</li>
                            <li className='server_list'>Ping 3 RTT: <span>{this.state.unbc3}</span> ms</li>
                        </ul>
                    </div>
                    <div className="list_server">
                        <ul>
                            <li className='server_list'>Time 1: 12:0<span>{((this.state.unbc1)/2)}</span></li>
                            <li className='server_list'>Time 2: 12:0<span>{((this.state.unbc2)/2)}</span></li>
                            <li className='server_list'>Time 3: 12:0<span>{((this.state.unbc3)/2)}</span></li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div className="flex-container wrap">
                        <div id="site1" className="clocks1">
                            <h2>Ping 1</h2>
                            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="-25 -25 150 150">
                                <path className="spinner_main_under" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                                <path id="ping_same1" className="spinner_main_upper" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                            </svg>
                        </div>
                        <div id="site2" className="clocks1">
                            <h2>Ping 2</h2>
                            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="-25 -25 150 150">
                                <path className="spinner_main_under" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                                <path id="ping_same2" className="spinner_main_upper" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                            </svg>
                        </div>
                        <div id="site3" className="clocks1">
                            <h2>Ping 3</h2>
                            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="-25 -25 150 150">
                                <path className="spinner_main_under" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                                <path id="ping_same3" className="spinner_main_upper" d="M226.37,196.35a50.33,50.33,0,1,1-50.55,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-175.32 -195.85)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PingSame;