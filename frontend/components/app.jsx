import React from "react";
import homeContainer from "./home/home_container";
import homeIndexContainer from "./home_index/home_index_container";
import { Route, Switch, Link } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/Modal';
import Header from './header/header_container';
import PinIndexContainer from './pins/pin_index_container';
import PinShowContainer from './pins/pin_show_container';
import EditPinFormContainer from './pins/edit_pin_form_container';
import CreatePinFormContainer from './pins/create_pin_form_container';
import BoardIndexContainer from './boards/board_index_container';
import BoardShowContainer from './boards/board_show_container';
import EditBoardFormContainer from './boards/edit_board_form_container';
import CreateBoardFormContainer from './boards/create_board_form_container';
import ProfileContainer from './profile/profile_container'

const App = () => (
    <div>       
        <ProtectedRoute path="/" component={Header} />
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} />  */}
        <Switch>
        
        {/* <ProtectedRoute path="/pins/:pinId" component={PinIndexContainer} /> */}
        <Route path="/home" component={homeIndexContainer} />
        <Route exact path="/pins/:pinId" component={PinShowContainer} />
        <Route path="/pins/:pinId/edit" component={EditPinFormContainer} />
        
        <ProtectedRoute path="/users/:userId/pins/" component={PinIndexContainer} />
        <Route exact path="/boards/:boardId" component={BoardShowContainer} />
        <ProtectedRoute path="/boards/:boardId/edit" component={EditBoardFormContainer} />
        {/* <ProtectedRoute path="/boards/new" component={CreateBoardFormContainer} /> */}
        {/* <ProtectedRoute path="/pins/new" component={CreatePinFormContainer} /> */}
        <ProtectedRoute path="/users/:userId/boards" component={BoardIndexContainer} />
        <ProtectedRoute path="/users/:userId/" component={ProfileContainer} />
        <Route path="/" component={homeContainer} />
        </Switch>
    </div>
    
);

export default App;