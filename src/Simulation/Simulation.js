import React from 'react';
import './Simulation.css';
import anime from 'animejs';

/**
 * This component will include a TIMESERVER that includes
 * the current time and a node that wishes to receive the current time.
 * 
 * onClick of the node, it wil delay, then display the time. During this
 * time, the timeServer time will increase.  
 */

export class Simulation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { timeServerTime: 12 };


        this.increaseTime = this.increaseTime.bind(this);
        this.commAnimation = this.commAnimation.bind(this);
        this.countUp = this.countUp.bind(this);
    }

    /**
     * This is our base for working. When we click on the node, we can include a delay 
     * that will control some simply animation from the ts to the node. During this time
     * the time on the ts will increase, but the old time will display on the node. Not good. 
     */

    increaseTime() {
        setTimeout(() => { this.countUp(); }, 1000);
    }

    countUp() {
        let currentTime = this.state.timeServerTime;
        currentTime++;
        this.setState({ timeServerTime: currentTime });
        this.increaseTime();
    }

    countUpStop() {

    }

    /**
     * Animation to control the communication signal.
     */
    commAnimation() {
        let commAnime = anime({
            targets: '.commSignal',
            left: '240px',
            loop: 1,
            backgroundColor: '#22D970',
            borderRadius: ['0%', '50%'],
            easing: 'easeInOutQuad'
        });
    }


    //Animation line drawing
    drawLines() {
        anime({
            targets: '#path1, #path2, #path3, #path4, #path5, #path6, #path7, #path8, #path9',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1000,
            delay: function (el, i) { return i * 250 },

        });
    }

    //Map network animation synchronized.
    drawLines1() {
        anime({
            targets: '#path1',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1800,
            delay: function (el, i) { return i * 250 },
            endDelay: 400,
            loop: true,
            direction: 'alternate',

        });
    }
    drawLines2() {
        anime({
            targets: '#path2',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 3800,
            delay: function (el, i) { return i * 250 },
            endDelay: 400,
            loop: true,
            direction: 'alternate',

        });
    }
    drawLines3() {
        anime({
            targets: '#path3',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2500,
            delay: function (el, i) { return i * 250 },
            endDelay: 300,
            loop: true,
            direction: 'alternate',

        });
    }
    drawLines4() {
        anime({
            targets: '#path4',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 3400,
            delay: function (el, i) { return i * 250 },
            endDelay: 600,
            loop: true,
            direction: 'alternate',

        });
    }
    drawLines5() {
        anime({
            targets: '#path5',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2900,
            delay: function (el, i) { return i * 250 },
            endDelay: 300,
            loop: true,
            direction: 'alternate',

        });
    }
    drawLines6() {
        anime({
            targets: '#path6',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1200,
            delay: function (el, i) { return i * 250 },
            endDelay: 400,
            loop: true,
            direction: 'alternate',

        });
    }
    drawLines7() {
        anime({
            targets: '#path7',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            delay: function (el, i) { return i * 250 },
            endDelay: 300,
            loop: true,
            direction: 'alternate',

        });
    }
    drawLines8() {
        anime({
            targets: '#path8',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1700,
            delay: function (el, i) { return i * 250 },
            endDelay: 500,
            loop: true,
            direction: 'alternate',

        });
    }
    drawLines9() {
        anime({
            targets: '#path9',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            delay: function (el, i) { return i * 250 },
            endDelay: 400,
            loop: true,
            direction: 'alternate',

        });
    }


    /**
     * Mount the enclosed functions when this componenet is called.
     */
    componentDidMount() {
        //this.drawLines();
        this.drawLines1();
        this.drawLines2();
        this.drawLines3();
        this.drawLines4();
        this.drawLines5();
        this.drawLines6();
        this.drawLines7();
        this.drawLines8();
        this.drawLines9();
    }


    render() {
        return (
            <div className='flex-container wrap'>

                <div className='map_container'>
                    <svg viewBox="0 0 703.57 388.29">
                        <g id="map">
                            <path class="map" d="M44.24,184.18l18.58-15.49,28.26,11.62,13.55.38,20.9-6.19,18.58,5v7l36,.39V176.82h10.07l10.84,12V201.6s-16.26-.39-16.65,15.87S208.76,233,208.76,233V243h4.64V233l6.58-4.64v-5l-4.64-5.42,3.1-3.09V203.14H225l7.35,6.2v10.84h10.84v-7.36h5v13.94l12.39,10.45v5L237,255.4v8.91h-7.36v8.51h-8.9v16.26L209.53,298v12.39h-5.8V299.53H181.27v18.2s-1.54,7.35,4.26,7.35,5-6.58,5-6.58h6.2v5.81h10.45v15.48h43V351h20.9v8.12l29.81,12.78v5.42l-8.13,7v12.38L275,408.31v8.12l-9.29,16.26H256v12H245.92v27.1l2.71,3.1h-7L231.6,464.43v-72H220.37l-12-22.45,10.45-18.58v-6.19H200.24V330.5H178.18l-15.1-9.68v-8.13l-18.19-17.42h-7.74l-12-15.48V251.14L93,215.14H74.44L66.69,226H51.21l-6.58-6.58v-7.74H55.08v-8.52H41.15v-7.35H52.76Z" transform="translate(-39.71 -87.1)" />
                            <rect class="map" x="166.91" y="228.31" width="13.55" height="4.65" />
                            <polygon class="map" points="183.95 234.5 194.78 234.5 194.78 238.95 184.14 238.95 183.95 234.5" />
                            <polygon class="map" points="200.78 10.95 200.78 39.21 218.59 39.21 218.59 93.6 245.11 120.89 254.21 120.89 254.21 98.05 280.91 71.92 280.91 34.76 293.5 20.63 293.5 10.18 282.85 0.5 250.33 0.5 250.33 7.08 233.88 7.08 233.88 2.05 219.56 2.05 219.56 9.79 200.78 10.95" />
                            <polygon class="map" points="287.3 99.21 287.3 104.05 290.59 104.05 290.59 99.79 303.17 99.79 303.17 106.37 293.3 112.76 283.43 108.89 283.43 99.02 287.3 99.21" />
                            <polygon class="map" points="319.82 132.69 324.66 133.08 324.66 141.4 330.85 146.05 330.85 156.89 319.82 156.89 319.82 153.21 323.69 149.92 319.82 145.47 319.82 132.69" />
                            <polygon class="map" points="316.91 143.73 316.91 153.4 309.37 156.11 309.37 147.4 312.85 147.4 312.85 143.73 316.91 143.73" />
                            <polygon class="map" points="339.75 117.21 349.04 110.24 367.24 78.11 385.43 78.11 385.43 85.08 392.01 81.98 404.79 96.31 397.82 105.6 401.3 110.24 422.98 87.79 446.2 87.79 446.2 82.76 463.24 82.76 463.24 67.66 477.17 67.66 490.72 56.05 500.4 56.05 500.4 43.66 513.17 37.08 525.17 37.08 525.17 28.18 538.33 28.18 538.33 33.21 551.88 33.21 551.88 56.82 584.01 56.82 584.01 76.18 589.43 76.18 589.43 68.82 602.98 68.82 602.98 59.92 622.72 59.92 622.72 75.4 640.91 75.4 640.91 78.89 676.53 78.89 702.85 98.63 696.27 106.37 685.04 100.18 662.98 127.27 656.78 125.73 638.59 157.85 638.59 135.02 649.82 121.47 631.62 121.47 631.62 129.21 599.11 129.21 593.3 140.82 602.2 149.34 602.2 167.15 594.46 179.53 586.72 179.53 578.2 187.66 585.17 194.63 582.08 200.05 568.91 186.5 558.85 195.4 568.53 207.02 568.53 213.6 550.72 230.63 535.24 230.63 535.24 235.27 544.14 244.95 535.24 256.56 527.11 249.21 527.11 261.98 522.46 261.98 522.46 242.63 512.78 242.63 512.78 229.08 500.79 229.08 500.79 235.66 487.24 244.56 485.3 252.31 479.5 257.73 472.14 240.31 472.14 231.4 466.72 231.4 460.14 222.5 441.95 222.5 437.69 218.24 434.59 218.24 427.62 211.66 422.98 215.15 434.2 227.53 440.79 227.53 440.79 237.6 414.46 247.27 397.82 215.53 393.56 218.24 409.82 251.92 428.4 251.92 428.4 260.44 407.5 279.4 407.5 308.82 399.75 308.82 399.75 321.6 392.4 321.6 392.4 331.27 379.62 344.82 364.53 344.82 364.53 320.82 357.17 313.85 357.17 282.11 349.43 282.11 349.43 256.95 330.07 256.95 330.07 267.02 313.04 267.02 295.24 248.44 295.24 228.31 309.56 213.98 309.56 205.85 316.14 200.05 330.85 200.05 334.33 195.4 350.98 195.4 350.98 209.72 370.33 209.72 370.33 203.53 379.24 203.53 379.24 207.79 400.53 207.79 400.53 196.18 383.88 196.18 383.88 186.11 383.88 171.4 406.72 171.4 406.72 177.6 408.66 181.47 406.72 184.18 395.5 182.63 388.91 186.11 374.98 186.11 374.98 196.18 367.62 196.18 367.62 182.63 355.62 172.56 351.75 175.27 362.98 186.89 357.17 189.21 347.11 178.37 334.33 178.37 334.33 184.18 329.3 184.18 329.3 197.34 310.72 197.34 310.72 180.31 326.98 180.31 326.98 162.89 340.91 150.11 360.66 150.11 360.66 145.47 371.11 145.47 371.11 134.63 378.07 127.27 388.53 127.27 388.53 123.02 371.11 123.02 371.11 115.27 378.07 109.08 378.07 100.18 372.27 100.18 372.27 107.53 363.75 116.05 363.75 141.6 351.37 141.6 351.37 128.44 345.95 128.44 345.95 134.63 339.75 134.63 339.75 117.21" />
                            <polygon class="map" points="436.91 173.92 436.91 169.47 421.04 169.47 421.04 184.18 424.33 184.18 424.33 192.5 428.3 196.47 434.98 196.47 434.98 183.4 431.5 183.4 431.5 175.08 436.91 175.08 436.91 173.92" />
                            <polygon class="map" points="422.33 304.56 422.33 298.37 427.5 298.37 427.5 307.4 423.88 327.79 413.3 327.79 416.4 305.08 422.33 304.56" />
                            <polygon class="map" points="513.95 266.89 517.56 262.76 536.4 280.56 533.04 285.21 513.95 266.89" />
                            <polygon class="map" points="538.72 285.73 554.98 285.73 554.98 290.63 537.17 290.63 538.72 285.73" />
                            <polygon class="map" points="542.33 269.98 542.33 282.11 559.62 282.11 559.62 260.95 552.4 260.95 552.4 266.89 542.33 269.98" />
                            <polygon class="map" points="563.49 243.66 573.82 261.73 577.69 259.14 567.62 240.56 563.49 243.66" />
                            <polygon class="map" points="593.95 280.82 598.08 276.95 611.49 276.95 624.14 289.6 600.66 289.6 600.66 282.89 594.2 282.63 593.95 280.82" />
                            <polygon class="map" points="605.56 295.27 612.78 295.27 612.78 305.85 635.37 328.44 623.37 355.14 602.2 355.14 602.2 346.37 596.53 346.37 596.53 337.6 575.62 337.6 555.24 345.08 550.59 318.24 566.85 314.37 566.85 307.4 577.17 301.73 577.17 305.34 584.4 305.34 584.4 297.34 597.3 297.34 600.4 307.92 605.56 295.27" />
                            <polygon class="map" points="564.78 223.02 564.78 230.76 570.72 230.76 570.72 222.5 564.78 223.02" />
                            <polygon class="map" points="583.62 205.21 586.2 209.85 608.66 197.98 608.66 176.56 602.2 176.56 601.69 195.66 583.62 205.21" />
                            <polygon class="map" points="608.14 170.11 613.56 170.11 613.56 147.92 607.88 147.92 608.14 170.11" />
                            <polygon class="map" points="656.01 373.47 667.62 361.85 672.27 365.92 660.85 377.34 656.01 373.47" />
                            <polygon class="map" points="671.69 357.79 679.04 357.79 679.04 350.82 671.3 350.82 671.69 357.79" />
                            <polygon class="map" points="14.85 262.76 14.85 268.82 21.3 268.82 21.3 262.63 14.85 262.76" />
                            <polygon class="map" points="13.56 259.92 15.24 257.34 10.08 255.4 8.53 259.02 13.56 259.92" />
                            <polygon class="map" points="5.95 253.21 2.08 252.05 0.66 256.05 4.4 256.95 5.95 253.21" />
                        </g>
                        <g id="nodes">
                            <circle className="map_node" cx="376.74" cy="159.97" r="10.66" />
                            <circle className="map_node" cx="143.95" cy="178.48" r="6.93" />
                            <circle className="map_node" cx="240.61" cy="303.3" r="6.93" />
                            <circle className="map_node" cx="17.12" cy="265.49" r="6.93" />
                            <circle className="map_node" cx="376.14" cy="335.92" r="6.93" />
                            <circle className="map_node" cx="622.35" cy="337.26" r="6.93" />
                            <circle className="map_node" cx="445.25" cy="125.58" r="6.93" />
                            <circle className="map_node" cx="602.22" cy="196.58" r="6.93" />
                            <circle className="map_node" cx="482.11" cy="244.32" r="6.93" />
                            <circle className="map_node" cx="174.85" cy="198.11" r="6.93" />
                        </g>
                        <g id="networkLines">
                            <polyline id="path1" class="network_lines" points="375.37 154.37 343.62 122.63 196.53 122.63 145.82 173.34" />
                            <polyline id="path2" class="network_lines" points="373.04 159.02 560.4 159.02 598.72 197.34" />
                            <polyline id="path3" class="network_lines" points="380.01 163.66 412.14 195.79 438.07 195.79 483.95 241.66" />
                            <polyline id="path4" class="network_lines" points="373.04 166.76 476.01 166.76 512.01 202.76 549.56 202.76 549.56 279.02 602.98 279.02 602.98 319.27 624.62 340.91" />
                            <polyline id="path5" class="network_lines" points="369.17 163.66 244.53 163.66 212.78 195.4 174.85 195.4" />
                            <polyline id="path6" class="network_lines" points="376.74 159.97 331.24 205.47 289.43 205.47 241.43 253.47 241.43 303.3" />
                            <polyline id="path7" class="network_lines" points="369.17 157.47 349.43 137.73 208.14 137.73 132.46 213.4 70.33 213.4 17.4 266.34" />
                            <polyline id="path8" class="network_lines" points="376.7 165.84 376.7 215.39 362.77 229.32 326.38 229.32 326.38 249.45 360.44 249.45 374.38 263.39 374.38 333.84" />
                            <polyline id="path9" class="network_lines" points="378.25 156.55 407.67 127.13 445.61 127.13" />
                        </g>
                    </svg>
                </div>

                <button>Start</button>
            </div>
        );
    }
}

//Export the Component for use outside of this file. 
export default Simulation;

