import React from 'react';
const Greeting = ({ currentUser, logout, openModal })=> {
    return (
        <div className = "header-greeting" >
            <span className="header-name">Hi, {currentUser.username}!</span>
        </div >
    );
}

export default Greeting;