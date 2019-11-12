import React from 'react';
import ReactLoading from 'react-loading';
import './styles.css';
const Loader = () => {
    return (
        <div id="bg">
            <div className="loaderPage">
                <ReactLoading type="spin" color="black" height="50px" width="50px" />
            </div>
        </div>
    );
};

export default Loader;