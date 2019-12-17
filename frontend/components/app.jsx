import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
            <h1>myPin</h1>
            </Link>
        </header>
        <Route exact path="/" component={GreetingContainer} /> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <p>the change</p>
    </div>
    
);

export default App;