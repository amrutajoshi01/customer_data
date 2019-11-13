import React from 'react';
import './styles.css';
const Alert = ({ text, type, closeAlert }) => {
    return (
        <div className="alert " id={type}>
            <span className="closebtn" onClick={closeAlert}>&times;</span>
            {text}
        </div >
    );
};

export default Alert;