
import React from 'react';
import { Route, Link } from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            <header>
                <nav className="header-nav">
                    <div className="header-logo">
                        <img src={window.logoURL} />;
                    </div>
                    <div className="header-nav-search"><a href="#">Search</a></div>
                    <div>
                        <ul className="header-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Following</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Messages</a></li>
                            <li><a href="#">Notifications</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href=""><Link className="btn" to="/login">Login</Link></a></li>
                        </ul>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Header;