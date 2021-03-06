import React from 'react';
import './Switch.css';

/**
 * This is a simple switch toggle for use in the RTT file.
 * 
 * Reference: https://upmostly.com/tutorials/build-a-react-switch-toggle-component
 * Accessed: March, 2020
 */
const Switch = ({ isOn, handleToggle }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#40F78F' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};

export default Switch;