import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import Header from "../header/header_container";
import HomeIndex from "../home_index/home_index_container";
import PinIndex from "../pins/pin_index_container";
import Greeting from "../greeting/greeting_container";

const Home = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <HomeIndex/>
            <Modal />
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="home">
            {/* <Header/>  */}
            {/* <div className="header-greeting">
            <span className="header-name">Hi, {currentUser.username}!</span>
            <button className="header-greeting-btn" onClick={logout}>Log Out</button> 
            </div> */}
            {/* <Greeting/> */}
            <HomeIndex/>
        </hgroup>
       
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Home;