import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import Header from "../header/header";

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            {/* <button onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Signup</button> */}
            <div className="masonry">
                <div className="item"><img src={window.pin1URL} /></div>
                <div className="item"><img src={window.pin2URL} /></div>
                <div className="item"><img src={window.pin3URL} /></div>
                <div className="item"><img src={window.pin4URL} /></div>
                <div className="item"><img src={window.pin5URL} /></div>
                <div className="item"><img src={window.pin6URL} /></div>
                <div className="item"><img src={window.pin9URL} /></div>
                <div className="item"><img src={window.pin8URL} /></div>
                <div className="item"><img src={window.pin7URL} /></div>
                <div className="item"><img src={window.pin10URL} /></div>
                <div className="item"><img src={window.pin11URL} /></div>
                <div className="item"><img src={window.pin12URL} /></div>
                <div className="item"><img src={window.pin13URL} /></div>
                <div className="item"><img src={window.pin14URL} /></div>
                <div className="item"><img src={window.pin15URL} /></div>
                <div className="item"><img src={window.pin16URL} /></div>
            </div>
            <Modal />
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header">
            <Header/>
            <div className="header-greeting">
            <span className="header-name">Hi, {currentUser.username}!</span>
            <button className="header-greeting-btn" onClick={logout}>Log Out</button>
            </div>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;