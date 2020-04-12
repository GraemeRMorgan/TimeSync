import React from 'react';
import './PingSim.css';
import Ping from 'ping.js';
import anime from 'animejs';


class PingSim extends React.Component {
    constructor(props) {
        super(props);

        this.p = new Ping();

        this.state = {
            wikipedia: 0,
            unbc: 0,
            graeme: 0,
            kings: 0,
            kings2: 0,
            kings3: 0

        };
        this.spinSetup = this.spinSetup.bind(this);
        this.spinDriver = this.spinDriver.bind(this);
        this.spinStart = this.spinStart.bind(this);
        this.spinStart2 = this.spinStart2.bind(this);
        this.spinStart3 = this.spinStart3.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.p.ping("https://www.wikipedia.com/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ wikipedia: data });

                //setTimeout(() => {  this.spinStart(); }, 1000);
            }
        })

        this.p.ping("https://www.unbc.ca/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ unbc: data });
                //setTimeout(() => {  this.spinStart2(); }, 1000);
            }
        })


        this.p.ping("https://www.graememorgan.com/", (err, data) => {
            if (err) {
                console.log('There has been an error calling ping.js', err);
            } else {
                this.setState({ graeme: data });
                //setTimeout(() => {  this.spinStart3(); }, 1000);
                setTimeout(() => {  this.spinDriver(); }, 1000);
            }
        })

        // this.p.ping("https://www.kcl.ac.uk/", (err, data) => {
        //     if (err) {
        //         console.log('There has been an error calling ping.js', err);
        //     } else {
        //         this.setState({ kings: data });
        //     }
        // })

    }


    spinDriver() {
        setTimeout(() => {  this.spinStart(); }, this.props.delay*3000);
        setTimeout(() => {  this.spinStart2(); }, this.props.delay*3000);
        setTimeout(() => {  this.spinStart3(); }, this.props.delay*3000);
    }


    spinStart() {
        let setDuration = 320 - this.state.wikipedia;
        anime({
            targets: '#ping1',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            //duration: setDuration,
            duration: 1000,
            loop: false,
        });
    }

    spinStart2() {
        let setDuration = 320 - this.state.unbc;
        
        anime({
            targets: '#ping2',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            //duration: setDuration,
            duration: 1000,
            loop: false,
        });
    }
    spinStart3() {
        let setDuration = 320 - this.state.graeme;
        anime({
            targets: '#ping3',
            strokeDashoffset: [anime.setDashoffset, setDuration],
            easing: 'linear',
            //duration: setDuration,
            duration: 1000,
            loop: false,
        });
    }

    loadingDiv(){
        let tempDelay = this.props.delay*1000;
        
        /**
         * The anime.js library is used for the animation on the spinner. More documentation for 
         * this library can be found at https://github.com/juliangarnier/anime/
         */ 
        anime({
            targets: '#ping3',
            rotate: '+=360deg',
            easing: 'linear',
            duration: tempDelay,
            loop: false,
        });
    }


    spinSetup(){
        anime({
            targets: '#ping1, #ping2, #ping3',
            strokeDashoffset: [anime.setDashoffset, 320],
            easing: 'linear',
            //duration: setDuration,
            duration: 0,
            loop: false,
            autoplay:true
        }); 
    }

    



    componentDidMount() {
        this.spinSetup();
    }
    //<BoxDelay className="static_node" id="spinner_1" delay={.3} />

    render() {
        return (
            <div>
                <button className="button button_ping" onClick={this.handleClick}>Ping Servers</button>

                {/*<button onClick={this.spinDriver}>Trace</button>*/}
                <ul>
                    <li className='server_list'>Server 1 RTT: <span>{this.state.wikipedia}</span> milliseconds</li>
                    <li className='server_list'>Server 2 RTT: <span>{this.state.unbc}</span> milliseconds</li>
                    <li className='server_list'>Server 3 RTT: <span>{this.state.graeme}</span> milleseconds</li>
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