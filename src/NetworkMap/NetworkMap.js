import React from 'react';
import './NetworkMap.css';
import anime from 'animejs';

/**
 * This component is not functional and only displays a visualization of how a time
 * server interacts with external nodes. 
 */

export class Simulation extends React.Component {

    constructor(props) {
        super(props);
        this.increaseTime = this.increaseTime.bind(this);
        this.countUp = this.countUp.bind(this);
        this.drawLines2 = this.drawLines2.bind(this);
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

    /**
     * Al animated lines needed their own driver functions, as each line is animated at a different
     * rate. There is a lot of repetition from lines 40 to 156. Fundamentally, these are identical
     * functions with different values. Hardcoding values is sometimes essential in web development,
     * especially when it involves a constant variable, such as a visual image that is never going 
     * to change. I would prefer to have the hard coded values in the functions, rather than where 
     * the functions are called. 
     */
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
            duration: 2200,
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
            duration: 2700,
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
    
    // sMount the enclosed functions when this componenet is called. 
    componentDidMount() {
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


    /**
     * This render function returns the SVG elements. I should note that I did not write the <polygon> code.
     * I designed the map elements and positioned the nodes in vector image software. I then exported as 
     * SVG text. That SVG text is what you see below - although, there has been adjustments to the original
     * code. I have added custom className's and id's win order to style the elements.
     */
    render() {
        return (
            <div className='flex-container wrap'>

                <div className='map_container'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 703.57 388.29">

                        <g id="map">
                            <path className="map" d="M44.24,184.18l18.58-15.49,28.26,11.62,13.55.38,20.9-6.19,18.58,5v7l36,.39V176.82h10.07l10.84,12V201.6s-16.26-.39-16.65,15.87S208.76,233,208.76,233V243h4.64V233l6.58-4.64v-5l-4.64-5.42,3.1-3.09V203.14H225l7.35,6.2v10.84h10.84v-7.36h5v13.94l12.39,10.45v5L237,255.4v8.91h-7.36v8.51h-8.9v16.26L209.53,298v12.39h-5.8V299.53H181.27v18.2s-1.54,7.35,4.26,7.35,5-6.58,5-6.58h6.2v5.81h10.45v15.48h43V351h20.9v8.12l29.81,12.78v5.42l-8.13,7v12.38L275,408.31v8.12l-9.29,16.26H256v12H245.92v27.1l2.71,3.1h-7L231.6,464.43v-72H220.37l-12-22.45,10.45-18.58v-6.19H200.24V330.5H178.18l-15.1-9.68v-8.13l-18.19-17.42h-7.74l-12-15.48V251.14L93,215.14H74.44L66.69,226H51.21l-6.58-6.58v-7.74H55.08v-8.52H41.15v-7.35H52.76Z" transform="translate(-39.71 -87.1)" />
                            <rect className="map" x="166.91" y="228.31" width="13.55" height="4.65" />

                            <polygon className="map" points="183.95 234.5 194.78 234.5 194.78 238.95 184.14 238.95 183.95 234.5" />
                            <polygon className="map" points="200.78 10.95 200.78 39.21 218.59 39.21 218.59 93.6 245.11 120.89 254.21 120.89 254.21 98.05 280.91 71.92 280.91 34.76 293.5 20.63 293.5 10.18 282.85 0.5 250.33 0.5 250.33 7.08 233.88 7.08 233.88 2.05 219.56 2.05 219.56 9.79 200.78 10.95" />
                            <polygon className="map" points="287.3 99.21 287.3 104.05 290.59 104.05 290.59 99.79 303.17 99.79 303.17 106.37 293.3 112.76 283.43 108.89 283.43 99.02 287.3 99.21" />
                            <polygon className="map" points="319.82 132.69 324.66 133.08 324.66 141.4 330.85 146.05 330.85 156.89 319.82 156.89 319.82 153.21 323.69 149.92 319.82 145.47 319.82 132.69" />
                            <polygon className="map" points="316.91 143.73 316.91 153.4 309.37 156.11 309.37 147.4 312.85 147.4 312.85 143.73 316.91 143.73" />
                            <polygon className="map" points="339.75 117.21 349.04 110.24 367.24 78.11 385.43 78.11 385.43 85.08 392.01 81.98 404.79 96.31 397.82 105.6 401.3 110.24 422.98 87.79 446.2 87.79 446.2 82.76 463.24 82.76 463.24 67.66 477.17 67.66 490.72 56.05 500.4 56.05 500.4 43.66 513.17 37.08 525.17 37.08 525.17 28.18 538.33 28.18 538.33 33.21 551.88 33.21 551.88 56.82 584.01 56.82 584.01 76.18 589.43 76.18 589.43 68.82 602.98 68.82 602.98 59.92 622.72 59.92 622.72 75.4 640.91 75.4 640.91 78.89 676.53 78.89 702.85 98.63 696.27 106.37 685.04 100.18 662.98 127.27 656.78 125.73 638.59 157.85 638.59 135.02 649.82 121.47 631.62 121.47 631.62 129.21 599.11 129.21 593.3 140.82 602.2 149.34 602.2 167.15 594.46 179.53 586.72 179.53 578.2 187.66 585.17 194.63 582.08 200.05 568.91 186.5 558.85 195.4 568.53 207.02 568.53 213.6 550.72 230.63 535.24 230.63 535.24 235.27 544.14 244.95 535.24 256.56 527.11 249.21 527.11 261.98 522.46 261.98 522.46 242.63 512.78 242.63 512.78 229.08 500.79 229.08 500.79 235.66 487.24 244.56 485.3 252.31 479.5 257.73 472.14 240.31 472.14 231.4 466.72 231.4 460.14 222.5 441.95 222.5 437.69 218.24 434.59 218.24 427.62 211.66 422.98 215.15 434.2 227.53 440.79 227.53 440.79 237.6 414.46 247.27 397.82 215.53 393.56 218.24 409.82 251.92 428.4 251.92 428.4 260.44 407.5 279.4 407.5 308.82 399.75 308.82 399.75 321.6 392.4 321.6 392.4 331.27 379.62 344.82 364.53 344.82 364.53 320.82 357.17 313.85 357.17 282.11 349.43 282.11 349.43 256.95 330.07 256.95 330.07 267.02 313.04 267.02 295.24 248.44 295.24 228.31 309.56 213.98 309.56 205.85 316.14 200.05 330.85 200.05 334.33 195.4 350.98 195.4 350.98 209.72 370.33 209.72 370.33 203.53 379.24 203.53 379.24 207.79 400.53 207.79 400.53 196.18 383.88 196.18 383.88 186.11 383.88 171.4 406.72 171.4 406.72 177.6 408.66 181.47 406.72 184.18 395.5 182.63 388.91 186.11 374.98 186.11 374.98 196.18 367.62 196.18 367.62 182.63 355.62 172.56 351.75 175.27 362.98 186.89 357.17 189.21 347.11 178.37 334.33 178.37 334.33 184.18 329.3 184.18 329.3 197.34 310.72 197.34 310.72 180.31 326.98 180.31 326.98 162.89 340.91 150.11 360.66 150.11 360.66 145.47 371.11 145.47 371.11 134.63 378.07 127.27 388.53 127.27 388.53 123.02 371.11 123.02 371.11 115.27 378.07 109.08 378.07 100.18 372.27 100.18 372.27 107.53 363.75 116.05 363.75 141.6 351.37 141.6 351.37 128.44 345.95 128.44 345.95 134.63 339.75 134.63 339.75 117.21" />
                            <polygon className="map" points="422.33 304.56 422.33 298.37 427.5 298.37 427.5 307.4 423.88 327.79 413.3 327.79 416.4 305.08 422.33 304.56" />
                            <polygon className="map" points="513.95 266.89 517.56 262.76 536.4 280.56 533.04 285.21 513.95 266.89" />
                            <polygon className="map" points="538.72 285.73 554.98 285.73 554.98 290.63 537.17 290.63 538.72 285.73" />
                            <polygon className="map" points="542.33 269.98 542.33 282.11 559.62 282.11 559.62 260.95 552.4 260.95 552.4 266.89 542.33 269.98" />
                            <polygon className="map" points="563.49 243.66 573.82 261.73 577.69 259.14 567.62 240.56 563.49 243.66" />
                            <polygon className="map" points="593.95 280.82 598.08 276.95 611.49 276.95 624.14 289.6 600.66 289.6 600.66 282.89 594.2 282.63 593.95 280.82" />
                            <polygon className="map" points="605.56 295.27 612.78 295.27 612.78 305.85 635.37 328.44 623.37 355.14 602.2 355.14 602.2 346.37 596.53 346.37 596.53 337.6 575.62 337.6 555.24 345.08 550.59 318.24 566.85 314.37 566.85 307.4 577.17 301.73 577.17 305.34 584.4 305.34 584.4 297.34 597.3 297.34 600.4 307.92 605.56 295.27" />
                            <polygon className="map" points="564.78 223.02 564.78 230.76 570.72 230.76 570.72 222.5 564.78 223.02" />
                            <polygon className="map" points="583.62 205.21 586.2 209.85 608.66 197.98 608.66 176.56 602.2 176.56 601.69 195.66 583.62 205.21" />
                            <polygon className="map" points="608.14 170.11 613.56 170.11 613.56 147.92 607.88 147.92 608.14 170.11" />
                            <polygon className="map" points="656.01 373.47 667.62 361.85 672.27 365.92 660.85 377.34 656.01 373.47" />
                            <polygon className="map" points="671.69 357.79 679.04 357.79 679.04 350.82 671.3 350.82 671.69 357.79" />
                            <polygon className="map" points="14.85 262.76 14.85 268.82 21.3 268.82 21.3 262.63 14.85 262.76" />
                            <polygon className="map" points="13.56 259.92 15.24 257.34 10.08 255.4 8.53 259.02 13.56 259.92" />
                            <polygon className="map" points="5.95 253.21 2.08 252.05 0.66 256.05 4.4 256.95 5.95 253.21" />
                        </g>
                        <g id="nodes">
                            <circle className="map_node" cx="377.05" cy="160.66" r="14.97" />
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
                        <g id="lines_properDirection">
                            <polyline id="path1" className="network_lines" points="443.28 127.13 405.35 127.13 378.64 153.84" />
                            <polyline id="path2" className="network_lines" points="144.45 175.13 196.7 122.87 342.64 122.87 374.19 154.42" />
                            <polyline id="path3" className="network_lines" points="17.48 264.94 68.96 213.45 132.06 213.45 208.51 137 347.28 137 368.67 158.39" />
                            <polyline id="path4" className="network_lines" points="176.19 197.58 209.48 197.58 245.09 161.97 368.19 161.97" />
                            <polyline id="path5" className="network_lines" points="240.45 300.55 240.45 254.1 289.61 204.94 331.8 204.94 371.48 165.26" />
                            <polyline id="path6" className="network_lines" points="375.93 334.61 375.93 263.39 361.22 248.68 326.38 248.68 326.38 229.32 360.44 229.32 377.09 212.68 377.09 167.39" />
                            <polyline id="path7" className="network_lines" points="481.49 240.93 430.19 189.63 403.18 189.63 380.3 166.75" />
                            <polyline id="path8" className="network_lines" points="618.25 335.39 602.38 319.51 602.38 278.1 547.8 278.1 547.8 201.45 512.96 201.45 473.48 161.97 382.12 161.97" />
                            <polyline id="path9" className="network_lines" points="601.99 196.81 559.8 154.61 380.57 154.61" />
                        </g>
                    </svg>

                </div>
            </div>
        );
    }
}

export default Simulation;

