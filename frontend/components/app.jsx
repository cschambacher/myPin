import React from "react";
import homeContainer from "./home/home_container";
import { Route, Switch, Link } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/Modal';
import Header from './header/header_container';
import PinIndexContainer from './pins/pin_index_container'

const App = () => (
    <div>       
        <ProtectedRoute path="/" component={Header} />
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} />  */}
        <Switch>
        <ProtectedRoute path="/pins" component={PinIndexContainer} />
        <ProtectedRoute path="/pins/:pinId" component={PinIndexContainer} />
        <Route path="/" component={homeContainer} />
        </Switch>
    </div>
    
);

export default App;