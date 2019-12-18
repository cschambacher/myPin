import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Route, Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => {
    // debugger;
    return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup"> signup instead </Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    processForm: (user) => dispatch(login(user)),
    // closeModal:()=> dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
