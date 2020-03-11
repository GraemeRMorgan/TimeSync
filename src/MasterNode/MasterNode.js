import React from 'react';
import './MasterNode.css';
import { AnimateKeyframes } from 'react-simple-animate';
import { Box } from '../Box/Box';


export class MasterNode extends React.Component {

    state = { play: true };

    render() {
        return (
            <div>
               

                

                    <Box className='master_box'/>
                

            
            </div>
        )
    }
}