import React from 'react';

export class Clock extends React.Component {
    state = {
      time: new Date()
    };
  
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        time: new Date()
      });
    }
  
    render() {
      return (
        <div>
          {this.state.time.toLocaleTimeString()}
        </div>
      );
    }
  }

