
import React from 'react';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { Route, Link } from 'react-router-dom';

const Header = ({ currentUser, logout, openModal }) => {

    return(
        <header>
            <nav className="header-nav">
                <div className="header-logo">
                    <img src={window.logoURL} />
                </div>
                <div className="header-nav-app">MyPin</div>
                <div className="header-nav-search"><a href="#">Search</a></div>
                <div>
                    <ul className="header-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Following</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Messages</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href=""><button className="header-button" onClick={logout}>Log Out</button></a></li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header;