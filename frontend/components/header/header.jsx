
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Greeting from "../greeting/greeting_container";

const Header = ({ currentUser, logout, openModal }) => {
   
    return(
        <header className="header">
            <nav className="header-nav">
                <div className="header-logo">
                    <Link to={`/pins/homeindex`}><img src={window.logo2URL} /></Link>
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
                        <li><Link to={`/pins/homeindex`}>Home</Link></li>
                        <li><a href="#">Following</a></li>
                        <li><Link to={`/users/${currentUser.id}/`}>Profile</Link></li>
                        <li className="icon-message"><i className="fas fa-comment-dots fa-2x"></i></li>
                        <li className="icon-notification"><i className="fas fa-bell fa-2x"></i></li>
                        <li className="header-button" onClick={logout}>Log Out</li>
                    </ul>
                </div>
            </nav>
            <Greeting />
            
        </header>
    )
}

export default Header;