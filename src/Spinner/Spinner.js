import React from 'react';
import anime from 'animejs';
import './Spinner.css';


class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.anime_test = this.anime_test.bind(this);
    }

    anime_test() {
        anime({
            targets: '.my-star',
            autoplay: true,
            loop: true,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: 500,
          });
    }

    render() {
        { this.anime_test() };
        return (
            <div>
                <svg>
                    <path class="my-star" d="M 712 382.666 L 725.720412519 429.143826677 L 772.0002535 428.501666695 L 734.200093795 456.584383323 L 749.082195997 502.665333305 L 712 473.54358 L 674.917804003 502.665333305 L 689.799906205 456.584383323 L 651.9997465 428.501666695 L 698.279587481 429.143826677 Z" fill="#0c87ff" transform="matrix(1, 0.000056, -0.000056, 1, -651.974205, -382.702622)" ></path>
                </svg>


            </div >

        );
    }


}

export default Spinner;

