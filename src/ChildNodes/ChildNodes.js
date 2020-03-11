import React from 'react';
import './ChildNodes.css';
import { Box } from '../Box/Box';

export class ChildNodes extends React.Component {


    render() {
        return (
            <div>
                <Box className={this.props.className} delay={this.props.delay}/>
            </div>
        )
    }
}



