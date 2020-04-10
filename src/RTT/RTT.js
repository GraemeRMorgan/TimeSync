import React from 'react';
import './RTT.css';
import anime from 'animejs';
import { Animate, AnimateGroup } from 'react-simple-animate';

export class RTT extends React.Component {


    constructor(props) {
        super(props);
    }

    drawLine() {
        anime({
            targets: '.single_network_line',
            strokeDashoffset: [anime.setDashoffset, 0],
            //easing: 'cubicBezier(.5, .05, .1, .3)',
            easing: 'linear',
            duration: 1800,
            endDelay: 1000,
            delay:500,
            loop: true,
            direction: 'alternate',

        });
    }

    rttSpinFade(){
        anime({
            targets: '#spinner_upper',
            easing: 'linear',
            delay:6100,
            duration: 500,
            opacity: 0,
            loop: true,
        });
    }


    rttSpinStart() {
          anime({
            targets: '#spinner_upper',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 5600,
            delay:500,
            endDelay:500,
            loop: true,
        });
    }

   

    

    componentDidMount() {
        this.drawLine();
        this.rttSpinStart();
        this.rttSpinFade();
    }

    render() {

        return (
            <div className='flex-container wrap'>
                <div className='rtt_container'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 668.56 225.1">

                        <g id="Layer_2" data-name="Layer 2">
                            <path className="node_box" d="M228.15,297.5H96.21A25.33,25.33,0,0,1,70.9,272.19V205.5a25.33,25.33,0,0,1,25.31-25.31H228.15a25.34,25.34,0,0,1,25.31,25.31v66.69A25.34,25.34,0,0,1,228.15,297.5ZM96.21,181.19A24.33,24.33,0,0,0,71.9,205.5v66.69A24.33,24.33,0,0,0,96.21,296.5H228.15a24.34,24.34,0,0,0,24.31-24.31V205.5a24.34,24.34,0,0,0-24.31-24.31Z" transform="translate(-70.9 -144.4)" />
                            <g id="node_text">
                                <path className="node_text" d="M142.27,169.56h-4.84L128,154.12v15.44h-4.83V146.1H128l9.43,15.47V146.1h4.82Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M145.46,160.68a10.26,10.26,0,0,1,1-4.62,7.25,7.25,0,0,1,2.87-3.15,8.41,8.41,0,0,1,4.36-1.11,7.94,7.94,0,0,1,5.76,2.16,8.66,8.66,0,0,1,2.49,5.87l0,1.19a9.1,9.1,0,0,1-2.24,6.44,8.67,8.67,0,0,1-12,0,9.26,9.26,0,0,1-2.25-6.57Zm4.66.33a6.54,6.54,0,0,0,.93,3.8,3.07,3.07,0,0,0,2.67,1.32,3.12,3.12,0,0,0,2.65-1.3,7.17,7.17,0,0,0,.95-4.16,6.46,6.46,0,0,0-.95-3.77,3.09,3.09,0,0,0-2.68-1.34,3,3,0,0,0-2.64,1.33A7.28,7.28,0,0,0,150.12,161Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M164.12,160.71a10.48,10.48,0,0,1,1.83-6.49,5.93,5.93,0,0,1,5-2.42,5.37,5.37,0,0,1,4.21,1.9v-8.89h4.67v24.75h-4.21l-.22-1.85a5.48,5.48,0,0,1-4.48,2.17,5.93,5.93,0,0,1-4.94-2.42A10.87,10.87,0,0,1,164.12,160.71Zm4.65.35a6.88,6.88,0,0,0,.86,3.76,2.78,2.78,0,0,0,2.48,1.31,3.13,3.13,0,0,0,3-1.83v-6.89a3.08,3.08,0,0,0-3-1.82C169.9,155.59,168.77,157.41,168.77,161.06Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M191.46,169.88a8.54,8.54,0,0,1-6.24-2.35,8.36,8.36,0,0,1-2.41-6.27v-.45a10.64,10.64,0,0,1,1-4.7,7.5,7.5,0,0,1,2.88-3.19A8.15,8.15,0,0,1,191,151.8a7.22,7.22,0,0,1,5.63,2.26,9.14,9.14,0,0,1,2,6.39v1.91h-11.1a4.34,4.34,0,0,0,1.36,2.74,4.16,4.16,0,0,0,2.88,1,5,5,0,0,0,4.2-1.95l2.29,2.56a7,7,0,0,1-2.83,2.31A9.41,9.41,0,0,1,191.46,169.88Zm-.53-14.32a2.91,2.91,0,0,0-2.25.94,4.86,4.86,0,0,0-1.1,2.68h6.48v-.37a3.47,3.47,0,0,0-.84-2.4A3,3,0,0,0,190.93,155.56Z" transform="translate(-70.9 -144.4)" />
                            </g>
                            <g id="time_server_text">
                                <path className="node_text" d="M577.7,149.2h-7.19v19.55h-4.83V149.2h-7.09v-3.91H577.7Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M580.12,146.8a2.28,2.28,0,0,1,.7-1.72,2.62,2.62,0,0,1,1.91-.68,2.66,2.66,0,0,1,1.9.68,2.45,2.45,0,0,1,0,3.46,3,3,0,0,1-3.79,0A2.27,2.27,0,0,1,580.12,146.8Zm4.94,21.95h-4.67V151.32h4.67Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M593.26,151.32l.15,2a6.1,6.1,0,0,1,5-2.28,4.64,4.64,0,0,1,4.62,2.66,6,6,0,0,1,5.24-2.66,5.19,5.19,0,0,1,4.22,1.65,7.59,7.59,0,0,1,1.39,5v11.13h-4.67V157.63a3.37,3.37,0,0,0-.58-2.17,2.6,2.6,0,0,0-2-.68,2.91,2.91,0,0,0-2.9,2l0,12h-4.66v-11.1a3.26,3.26,0,0,0-.6-2.19,2.6,2.6,0,0,0-2-.68,3,3,0,0,0-2.87,1.64v12.33H588.9V151.32Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M625.49,169.07a8.53,8.53,0,0,1-6.24-2.35,8.36,8.36,0,0,1-2.41-6.27V160a10.64,10.64,0,0,1,1-4.7,7.5,7.5,0,0,1,2.88-3.19A8.11,8.11,0,0,1,625,151a7.26,7.26,0,0,1,5.64,2.26,9.17,9.17,0,0,1,2,6.4v1.9h-11.1a4.31,4.31,0,0,0,1.36,2.74,4.16,4.16,0,0,0,2.88,1,5,5,0,0,0,4.2-1.95l2.29,2.56a6.92,6.92,0,0,1-2.84,2.31A9.18,9.18,0,0,1,625.49,169.07ZM625,154.75a2.91,2.91,0,0,0-2.25.94,4.86,4.86,0,0,0-1.1,2.68h6.47V158a3.46,3.46,0,0,0-.83-2.4A3,3,0,0,0,625,154.75Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M656,162.59a2.49,2.49,0,0,0-1-2.1,12.76,12.76,0,0,0-3.48-1.54,24.52,24.52,0,0,1-4-1.61q-4-2.16-4-5.82a5.72,5.72,0,0,1,1.07-3.39,7.05,7.05,0,0,1,3.08-2.33,11.75,11.75,0,0,1,4.5-.83,10.48,10.48,0,0,1,4.48.91,7,7,0,0,1,3,2.57,6.67,6.67,0,0,1,1.09,3.77H656a3.16,3.16,0,0,0-1-2.51,4.18,4.18,0,0,0-2.85-.89,4.43,4.43,0,0,0-2.75.75,2.35,2.35,0,0,0-1,2,2.28,2.28,0,0,0,1.16,1.92,12.92,12.92,0,0,0,3.39,1.45,14.64,14.64,0,0,1,6,3.08,6.14,6.14,0,0,1,1.88,4.57,5.63,5.63,0,0,1-2.3,4.78,10.08,10.08,0,0,1-6.21,1.73,12,12,0,0,1-4.93-1,7.8,7.8,0,0,1-3.39-2.71,7,7,0,0,1-1.17-4h4.85q0,3.88,4.64,3.88a4.54,4.54,0,0,0,2.7-.7A2.29,2.29,0,0,0,656,162.59Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M671.83,169.07a8.54,8.54,0,0,1-6.24-2.35,8.36,8.36,0,0,1-2.41-6.27V160a10.64,10.64,0,0,1,1-4.7,7.5,7.5,0,0,1,2.88-3.19,8.15,8.15,0,0,1,4.25-1.12,7.26,7.26,0,0,1,5.63,2.26,9.17,9.17,0,0,1,2,6.4v1.9H667.9a4.31,4.31,0,0,0,1.36,2.74,4.16,4.16,0,0,0,2.88,1,5,5,0,0,0,4.2-1.95l2.29,2.56a7,7,0,0,1-2.83,2.31A9.26,9.26,0,0,1,671.83,169.07Zm-.53-14.32a2.91,2.91,0,0,0-2.25.94,4.86,4.86,0,0,0-1.1,2.68h6.48V158a3.42,3.42,0,0,0-.84-2.4A3,3,0,0,0,671.3,154.75Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M691.44,155.68a13.68,13.68,0,0,0-1.67-.13c-1.77,0-2.92.6-3.47,1.79v11.41h-4.65V151.32H686l.13,2.07a4.32,4.32,0,0,1,3.89-2.4,4.89,4.89,0,0,1,1.45.21Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M700.5,163.06l3.24-11.74h4.86l-5.88,17.43h-4.45l-5.88-17.43h4.87Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M718.46,169.07a8.56,8.56,0,0,1-6.24-2.35,8.36,8.36,0,0,1-2.41-6.27V160a10.5,10.5,0,0,1,1-4.7,7.42,7.42,0,0,1,2.87-3.19A8.15,8.15,0,0,1,718,151a7.26,7.26,0,0,1,5.63,2.26,9.17,9.17,0,0,1,2,6.4v1.9h-11.1a4.36,4.36,0,0,0,1.36,2.74,4.16,4.16,0,0,0,2.88,1,5,5,0,0,0,4.21-1.95l2.28,2.56a6.89,6.89,0,0,1-2.83,2.31A9.22,9.22,0,0,1,718.46,169.07Zm-.53-14.32a2.91,2.91,0,0,0-2.25.94,4.86,4.86,0,0,0-1.1,2.68h6.48V158a3.42,3.42,0,0,0-.84-2.4A3,3,0,0,0,717.93,154.75Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M738.07,155.68a13.68,13.68,0,0,0-1.67-.13c-1.76,0-2.92.6-3.47,1.79v11.41h-4.65V151.32h4.4l.12,2.07a4.32,4.32,0,0,1,3.89-2.4,4.89,4.89,0,0,1,1.45.21Z" transform="translate(-70.9 -144.4)" />
                            </g>
                            <g id="rtt_text">
                                <path className="node_text" d="M383.13,173.23h-3V180h-3.81V161.52h6.87a7.75,7.75,0,0,1,5.06,1.46A5,5,0,0,1,390,167.1a5.69,5.69,0,0,1-.82,3.16,5.55,5.55,0,0,1-2.48,2l4,7.55V180h-4.09Zm-3-3.08h3.08a3.15,3.15,0,0,0,2.22-.73,2.63,2.63,0,0,0,.78-2,2.77,2.77,0,0,0-.74-2.06,3.07,3.07,0,0,0-2.28-.75h-3.06Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M406.16,164.6h-5.67V180h-3.8V164.6H391.1v-3.08h15.06Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M422.44,164.6h-5.66V180H413V164.6h-5.58v-3.08h15.05Z" transform="translate(-70.9 -144.4)" />
                            </g>
                            <path id="spinner_under" className="rtt_spinner" d="M397.73,196.35a50.33,50.33,0,1,1-50.56,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-70.9 -144.4)" />
                            <path id="spinner_upper" className="rtt_spinner" d="M397.73,196.35a50.33,50.33,0,1,1-50.56,50.32c0-27.79,22.94-50.32,50.73-50.32" transform="translate(-70.9 -144.4)" />
                            <path className="node_box" d="M714.15,297.5H582.21a25.33,25.33,0,0,1-25.31-25.31V205.5a25.33,25.33,0,0,1,25.31-25.31H714.15a25.34,25.34,0,0,1,25.31,25.31v66.69A25.34,25.34,0,0,1,714.15,297.5ZM582.21,181.19A24.33,24.33,0,0,0,557.9,205.5v66.69a24.33,24.33,0,0,0,24.31,24.31H714.15a24.34,24.34,0,0,0,24.31-24.31V205.5a24.34,24.34,0,0,0-24.31-24.31Z" transform="translate(-70.9 -144.4)" />
                            <g id="send_time_text">
                                <path className="node_text" d="M627.79,239.31a.82.82,0,0,0-.33-.7,4.18,4.18,0,0,0-1.16-.52,8.72,8.72,0,0,1-1.32-.53,2.17,2.17,0,0,1-1.33-1.94,1.87,1.87,0,0,1,.35-1.13,2.37,2.37,0,0,1,1-.78,3.93,3.93,0,0,1,1.5-.28,3.51,3.51,0,0,1,1.49.31,2.39,2.39,0,0,1,1,.85,2.26,2.26,0,0,1,.36,1.26h-1.61a1,1,0,0,0-.34-.83,1.37,1.37,0,0,0-1-.3,1.48,1.48,0,0,0-.92.25.79.79,0,0,0-.32.66.76.76,0,0,0,.38.64,4.42,4.42,0,0,0,1.13.48,4.93,4.93,0,0,1,2,1,2.08,2.08,0,0,1,.62,1.53,1.85,1.85,0,0,1-.77,1.59,3.31,3.31,0,0,1-2.06.58,4.05,4.05,0,0,1-1.65-.33,2.58,2.58,0,0,1-1.13-.91,2.29,2.29,0,0,1-.39-1.33H625c0,.87.52,1.3,1.55,1.3a1.45,1.45,0,0,0,.89-.24A.74.74,0,0,0,627.79,239.31Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M633.07,241.47a2.88,2.88,0,0,1-2.09-.78,2.82,2.82,0,0,1-.8-2.09v-.15a3.45,3.45,0,0,1,.34-1.57,2.54,2.54,0,0,1,1-1.06,2.66,2.66,0,0,1,1.41-.38,2.39,2.39,0,0,1,1.88.76,3,3,0,0,1,.69,2.13V239h-3.7a1.42,1.42,0,0,0,.45.91,1.37,1.37,0,0,0,1,.35,1.68,1.68,0,0,0,1.4-.65l.76.85a2.24,2.24,0,0,1-.94.77A3,3,0,0,1,633.07,241.47Zm-.18-4.78a1,1,0,0,0-.75.32,1.69,1.69,0,0,0-.37.89h2.16v-.12a1.16,1.16,0,0,0-.28-.8A1,1,0,0,0,632.89,236.69Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M637.77,235.55l0,.67a2,2,0,0,1,1.67-.78,1.67,1.67,0,0,1,1.38.55,2.54,2.54,0,0,1,.46,1.62v3.75h-1.55v-3.71a1,1,0,0,0-.22-.72.94.94,0,0,0-.71-.22,1.06,1.06,0,0,0-1,.55v4.1H636.3v-5.81Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M642.25,238.41a3.55,3.55,0,0,1,.61-2.16,2,2,0,0,1,1.67-.81,1.74,1.74,0,0,1,1.4.64v-3h1.56v8.25h-1.4l-.08-.62a1.8,1.8,0,0,1-1.49.73,2,2,0,0,1-1.64-.81A3.58,3.58,0,0,1,642.25,238.41Zm1.56.12a2.29,2.29,0,0,0,.28,1.25.94.94,0,0,0,.83.44,1,1,0,0,0,1-.61v-2.3a1,1,0,0,0-1-.6C644.18,236.71,643.81,237.31,643.81,238.53Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M657.1,234.85h-2.39v6.51h-1.62v-6.51h-2.36v-1.31h6.37Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M657.91,234.05a.75.75,0,0,1,.23-.58,1,1,0,0,1,1.27,0,.75.75,0,0,1,.24.58.77.77,0,0,1-.24.58.88.88,0,0,1-.63.22.89.89,0,0,1-.64-.22A.8.8,0,0,1,657.91,234.05Zm1.64,7.31H658v-5.81h1.55Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M662.29,235.55l.05.65a2,2,0,0,1,1.67-.76,1.56,1.56,0,0,1,1.54.89,2,2,0,0,1,1.74-.89,1.76,1.76,0,0,1,1.41.55,2.53,2.53,0,0,1,.46,1.66v3.71h-1.55v-3.7a1.14,1.14,0,0,0-.2-.73.85.85,0,0,0-.68-.22,1,1,0,0,0-1,.66v4h-1.55v-3.7a1.12,1.12,0,0,0-.2-.73.88.88,0,0,0-.68-.22,1,1,0,0,0-1,.54v4.11h-1.55v-5.81Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M673,241.47a2.85,2.85,0,0,1-2.08-.78,2.78,2.78,0,0,1-.8-2.09v-.15a3.58,3.58,0,0,1,.33-1.57,2.54,2.54,0,0,1,1-1.06,2.72,2.72,0,0,1,1.42-.38,2.41,2.41,0,0,1,1.88.76,3.08,3.08,0,0,1,.68,2.13V239h-3.7a1.42,1.42,0,0,0,.45.91,1.4,1.4,0,0,0,1,.35,1.7,1.7,0,0,0,1.41-.65l.76.85a2.33,2.33,0,0,1-.95.77A3,3,0,0,1,673,241.47Zm-.18-4.78a1,1,0,0,0-.75.32,1.61,1.61,0,0,0-.36.89h2.16v-.12a1.2,1.2,0,0,0-.28-.8A1,1,0,0,0,672.85,236.69Z" transform="translate(-70.9 -144.4)" />
                            </g>
                            <g id="total_time_text">
                                <path className="node_text" d="M103,235.09H100.6v6.51H99v-6.51H96.62v-1.31H103Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M103.8,234.29a.78.78,0,0,1,.23-.58.89.89,0,0,1,.64-.22.86.86,0,0,1,.63.22.75.75,0,0,1,.24.58.77.77,0,0,1-.24.58,1,1,0,0,1-1.26,0A.77.77,0,0,1,103.8,234.29Zm1.65,7.31h-1.56v-5.81h1.56Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M108.18,235.79l0,.65a2.06,2.06,0,0,1,1.67-.76,1.55,1.55,0,0,1,1.54.89,2,2,0,0,1,1.75-.89,1.73,1.73,0,0,1,1.4.55,2.53,2.53,0,0,1,.47,1.66v3.71H113.5v-3.7a1.2,1.2,0,0,0-.19-.73.88.88,0,0,0-.69-.22,1,1,0,0,0-1,.66v4h-1.55v-3.7a1.12,1.12,0,0,0-.2-.73.87.87,0,0,0-.68-.22,1,1,0,0,0-1,.54v4.11h-1.55v-5.81Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M118.92,241.71a2.87,2.87,0,0,1-2.08-.78,2.82,2.82,0,0,1-.8-2.09v-.15a3.45,3.45,0,0,1,.34-1.57,2.41,2.41,0,0,1,1-1.06,2.66,2.66,0,0,1,1.41-.38,2.39,2.39,0,0,1,1.88.76,3,3,0,0,1,.68,2.13v.63h-3.7a1.38,1.38,0,0,0,.46.91,1.37,1.37,0,0,0,1,.35,1.7,1.7,0,0,0,1.4-.65l.76.85a2.27,2.27,0,0,1-1,.77A3,3,0,0,1,118.92,241.71Zm-.17-4.77a1,1,0,0,0-.75.31,1.62,1.62,0,0,0-.37.89h2.16V238a1.16,1.16,0,0,0-.28-.8A1,1,0,0,0,118.75,236.94Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M129.87,237.6h-4.8v-1.27h4.8Zm0,2.32h-4.8v-1.27h4.8Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M137.69,239.74a.74.74,0,0,0-.29-.64,4.11,4.11,0,0,0-1.05-.47,7.22,7.22,0,0,1-1.21-.48,2,2,0,0,1-1.21-1.77,1.74,1.74,0,0,1,.32-1,2.08,2.08,0,0,1,.94-.71,3.47,3.47,0,0,1,1.36-.25,3.27,3.27,0,0,1,1.36.27,2.14,2.14,0,0,1,.92.78,2.05,2.05,0,0,1,.33,1.14H137.7a1,1,0,0,0-.31-.76,1.25,1.25,0,0,0-.86-.27,1.38,1.38,0,0,0-.84.23.71.71,0,0,0-.3.6.7.7,0,0,0,.35.58,4.1,4.1,0,0,0,1,.44,4.46,4.46,0,0,1,1.82.93,1.85,1.85,0,0,1,.57,1.39,1.71,1.71,0,0,1-.7,1.45,3,3,0,0,1-1.88.52,3.64,3.64,0,0,1-1.49-.3,2.37,2.37,0,0,1-1-.82,2.15,2.15,0,0,1-.35-1.21h1.47c0,.78.47,1.17,1.4,1.17a1.4,1.4,0,0,0,.82-.21A.67.67,0,0,0,137.69,239.74Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M142.49,241.7a2.62,2.62,0,0,1-1.89-.71,2.53,2.53,0,0,1-.73-1.9V239a3.12,3.12,0,0,1,.31-1.42,2.22,2.22,0,0,1,.87-1,2.51,2.51,0,0,1,1.29-.34,2.16,2.16,0,0,1,1.7.69,2.74,2.74,0,0,1,.63,1.93v.58H141.3a1.32,1.32,0,0,0,.41.83,1.25,1.25,0,0,0,.88.31,1.51,1.51,0,0,0,1.27-.59l.69.78a2.07,2.07,0,0,1-.86.7A2.77,2.77,0,0,1,142.49,241.7Zm-.16-4.34a.87.87,0,0,0-.68.28,1.47,1.47,0,0,0-.33.82h2v-.11a1,1,0,0,0-.26-.73A.9.9,0,0,0,142.33,237.36Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M148.44,237.64c-.2,0-.37,0-.51,0a1,1,0,0,0-1.05.55v3.45h-1.41v-5.28h1.33l0,.63a1.29,1.29,0,0,1,1.18-.73,1.21,1.21,0,0,1,.43.07Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M151.18,239.88l1-3.56h1.48l-1.79,5.28h-1.34l-1.79-5.28h1.48Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M156.62,241.7a2.62,2.62,0,0,1-1.89-.71,2.53,2.53,0,0,1-.73-1.9V239a3.12,3.12,0,0,1,.31-1.42,2.22,2.22,0,0,1,.87-1,2.53,2.53,0,0,1,1.29-.34,2.16,2.16,0,0,1,1.7.69,2.74,2.74,0,0,1,.63,1.93v.58h-3.37a1.28,1.28,0,0,0,.42.83,1.2,1.2,0,0,0,.87.31A1.5,1.5,0,0,0,158,240l.69.78a2.07,2.07,0,0,1-.86.7A2.77,2.77,0,0,1,156.62,241.7Zm-.16-4.34a.88.88,0,0,0-.68.28,1.54,1.54,0,0,0-.33.82h2v-.11a1.07,1.07,0,0,0-.25-.73A.94.94,0,0,0,156.46,237.36Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M162.57,237.64c-.2,0-.37,0-.51,0a1,1,0,0,0-1.05.55v3.45H159.6v-5.28h1.33l0,.63a1.34,1.34,0,0,1,1.62-.66Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M170.89,235.68h-2.18v5.92h-1.47v-5.92H165.1v-1.19h5.79Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M171.62,235a.7.7,0,0,1,.21-.52.79.79,0,0,1,.58-.21.81.81,0,0,1,.58.21.7.7,0,0,1,.21.52.68.68,0,0,1-.22.53.91.91,0,0,1-1.14,0A.68.68,0,0,1,171.62,235Zm1.5,6.65H171.7v-5.28h1.42Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M175.6,236.32l.05.59a1.85,1.85,0,0,1,1.52-.69,1.41,1.41,0,0,1,1.4.81,1.81,1.81,0,0,1,1.58-.81,1.58,1.58,0,0,1,1.28.5,2.32,2.32,0,0,1,.42,1.51v3.37h-1.41v-3.37a1,1,0,0,0-.18-.65.77.77,0,0,0-.62-.21.89.89,0,0,0-.88.6v3.63h-1.41v-3.36a1,1,0,0,0-.18-.67.82.82,0,0,0-.62-.2.92.92,0,0,0-.87.5v3.73h-1.41v-5.28Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M185.37,241.7a2.59,2.59,0,0,1-1.89-.71,2.53,2.53,0,0,1-.73-1.9V239a3.25,3.25,0,0,1,.3-1.42,2.3,2.3,0,0,1,.88-1,2.47,2.47,0,0,1,1.28-.34,2.19,2.19,0,0,1,1.71.69,2.78,2.78,0,0,1,.62,1.93v.58h-3.36a1.27,1.27,0,0,0,.41.83,1.24,1.24,0,0,0,.87.31,1.51,1.51,0,0,0,1.28-.59l.69.78a2.13,2.13,0,0,1-.86.7A2.77,2.77,0,0,1,185.37,241.7Zm-.16-4.34a.87.87,0,0,0-.68.28,1.47,1.47,0,0,0-.34.82h2v-.11a1,1,0,0,0-.25-.73A.9.9,0,0,0,185.21,237.36Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M193.68,237.62h1.76v1.28h-1.76v2h-1.34v-2h-1.77v-1.28h1.77v-1.91h1.34Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M201.51,239h-1.17v2.6h-1.47v-7.11h2.65a3,3,0,0,1,1.94.56,1.94,1.94,0,0,1,.68,1.59,2.21,2.21,0,0,1-.31,1.22,2.15,2.15,0,0,1-1,.77l1.54,2.9v.07h-1.57Zm-1.17-1.19h1.18a1.22,1.22,0,0,0,.86-.28,1,1,0,0,0,.3-.77,1.07,1.07,0,0,0-.29-.79,1.18,1.18,0,0,0-.87-.29h-1.18Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M210.36,235.68h-2.17v5.92h-1.47v-5.92h-2.15v-1.19h5.79Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M216.63,235.68h-2.18v5.92H213v-5.92h-2.15v-1.19h5.79Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M217.81,242.21h-1l2.61-7.72h1.05Z" transform="translate(-70.9 -144.4)" />
                                <path className="node_text" d="M225.92,241.6h-4.87v-1l2.3-2.46a5.57,5.57,0,0,0,.7-.9,1.45,1.45,0,0,0,.22-.73,1.16,1.16,0,0,0-.23-.75.87.87,0,0,0-.69-.27.92.92,0,0,0-.75.33,1.28,1.28,0,0,0-.28.87h-1.41a2.32,2.32,0,0,1,.31-1.19,2.14,2.14,0,0,1,.87-.84,2.73,2.73,0,0,1,1.29-.3,2.51,2.51,0,0,1,1.7.52,1.85,1.85,0,0,1,.61,1.49,2.46,2.46,0,0,1-.27,1.08,6.36,6.36,0,0,1-.94,1.27l-1.62,1.71h3.06Z" transform="translate(-70.9 -144.4)" />
                            </g>
                        </g>
                        <g id="network_line" >
                            <polyline className="single_network_line" points="91.1 152.6 91.1 224.6 577.1 224.6 577.1 152.6" />
                        </g>
                    </svg>



                </div>
            </div>
        );
    }
}

export default RTT;



