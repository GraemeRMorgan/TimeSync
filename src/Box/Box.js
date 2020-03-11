import React from 'react';
import './Box.css';

export class Box extends React.Component {


    render() {
        return(
            <div className={this.props.class}>
            </div>
        )
    }
}