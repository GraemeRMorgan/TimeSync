import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Title from './Title/Title';
import GraphDraw from './GraphDraw/GraphDraw';
import NodeGame from './NodeGame/NodeGame';
import NodeGameDelay from './NodeGameDelay/NodeGameDelay';
import Simulation from './Simulation/Simulation';

/**
 * This is the entry point for the web application. The component that is passed 
 * through the ReactDOM.render function is what will be displayed in the browser.
 */
ReactDOM.render(<NodeGame/>, document.getElementById('root'));


