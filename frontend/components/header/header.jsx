
import React from 'react';
import { Route, Link } from 'react-router-dom';

const Header = ({ currentUser, logout, openModal }) => {

    return(
        <header>
            <nav className="header-nav">
                <div className="header-logo">
                    <img src={window.logo2URL} />
                </div>
                <div className="header-nav-search">
                    <div className="icon-search"><i className="fas fa-search"></i></div>
                    <input
                    type="text"
                    value=""
                    placeholder="Search for Trends"
                    className="search-input"
                /></div>
                <div className="header-right">
                    <ul className="header-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Following</a></li>
                        <li><a href="#">Profile</a></li>
                        <li className="icon-message"><i className="fas fa-comment-dots fa-2x"></i></li>
                        <li className="icon-notification"><i className="fas fa-bell fa-2x"></i></li>
                        <li className="header-button" onClick={logout}>Log Out</li>
                    </ul>
                </div>
            </nav>
            
        </header>
    )
}

export default Header;