import React from 'react';
import './TimeNode.css';
import { Animate} from 'react-simple-animate';
import { Box } from '../Box/Box';



export class TimeNode extends React.Component {

    state = { play: false };


    render() {
        return (
            <div>
                
                <Animate
                    play={this.state.play}
                    start = {{
                        transform: "translateX(-200px)"
                    }}
                    end ={{
                        transform: "translateX(200px)"
                    }}
                >
                    <Box />

                </Animate>
                <button onClick={() => this.setState(({ play }) => ({ play: !play }))}>
                    Click to Play
                </button>
            </div>
        );
    }
}