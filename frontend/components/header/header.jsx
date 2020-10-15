
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Greeting from "../greeting/greeting_container";

const Header = ({ currentUser, logout, openModal }) => {

    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-brand">
                    <div className="header-logo">
                        <Link to={`/home`}><img src={window.logo2URL} /></Link>
                    </div>
                    <ul className="header-list">
                        <li><Link to={`/home`}>Home</Link></li>
                        <li><a href="#">Following</a></li>
                    </ul>
                </div>
                <div className="header-nav-search">
                    <div className="icon-search"><i className="fas fa-search"></i></div>
                    <input
                        type="text"
                        value=""
                        placeholder="Search for Trends"
                        className="search-input"
                    />
                </div>
                <div className="header-right">
                    <ul className="header-list">
                        <li className="profile-dropdown"><Link to={`/users/${currentUser.id}/`}>Profile</Link></li>
                            <div className="profile-dropdown-content">
                                <li className="header-button" onClick={logout}>Log Out</li>
                            </div>
                        <li className="icon-message"><i className="fas fa-comment-dots fa-2x"></i></li>
                        <li className="icon-notification"><i className="fas fa-bell fa-2x"></i></li>
                        
                    </ul>
                </div>
            </nav>
            {/* <Greeting /> */}

        </header>
    )
}

export default Header;