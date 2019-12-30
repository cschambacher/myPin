import React from 'react';
const Greeting = ({ currentUser, logout, openModal })=> {
    return (
        <div className = "profile-greeting" >
            <div className="greeting-list">
                <ul>
                    <li className="icon-plus-dropdown"><i className="fas fa-plus fa-1x"></i></li>
                        <div className="dropdown-content">
                            <ul>
                                <li>Create Board</li>
                                <li>Create Pin</li>
                            </ul>
                        </div>
                   
                    <li className="icon-edit"><i className="fas fa-pen fa-1x"></i></li>        
                </ul>
            </div>
            <span className="profile-name">Hi, {currentUser.username}!</span>
            <div className="profile-following">11 Followers, 22 Following</div>
        </div >
    );
}

export default Greeting;