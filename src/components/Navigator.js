import React from 'react';
import './Navigator.css';

const Navigator = () => {
    return (
        <div className='nav'>
            <Label className='welcome-label'>Welcome!</Label>   
            <button className="sign-in-button">Sign in</button>   
        </div>
    );
}

export default Navigator;