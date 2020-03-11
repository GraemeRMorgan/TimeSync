import React from 'react';
import './Box.css';

export class Box extends React.Component {

    state = { pause: false };


    render() {
        return (
            <div className={this.props.className}>
            </div>
        )
    }
}