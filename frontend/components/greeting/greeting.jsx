import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import Header from "../header/header_container";
import Masonry from "../masonry/masonry";

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            {/* <button onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Signup</button> */}
            <Masonry/>
            <Modal />
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header">
            <Header/>
            <div className="header-greeting">
            <span className="header-name">Hi, {currentUser.username}!</span>
            {/* <button className="header-greeting-btn" onClick={logout}>Log Out</button> */}
            </div>
            <Masonry />
        </hgroup>
       
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;