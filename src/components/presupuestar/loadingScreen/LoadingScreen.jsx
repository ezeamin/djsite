import React from 'react';
import './loadingScreen.css';

const LoadingScreen = (props) => {
    const className = props.className ? (props.className + " loadingScreen") : "loadingScreen";
    return (
        <div className={className}>
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingScreen;