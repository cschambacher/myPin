import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { signup, login } from '../../util/session_api_util';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {login: true};
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick(e) {
    //     return (e) => {
    //         this.setState({ login: !(this.state.login) });
    //     };
    // }
    render(){
        let component;
        let modalButton;
        if (this.state.login){
            component = <LoginFormContainer />;
            modalButton = <button className="modal-button" onClick={e => this.setState({ login: !(this.state.login) })}>Sign Up</button>;
        } else {
            component = <SignupFormContainer />;
            modalButton = <button className="modal-button" onClick={e => this.setState({ login: !(this.state.login) })}>Log In</button>;
        }
        return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-altbutton">
                {modalButton}
    
            </div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
    }
}
// function Modal({ modal, closeModal }) {
//     if (!modal) {
//         return null;
//     }
//     let component;
//     switch (modal) {
//         case 'login':
//             component = <LoginFormContainer />;
//             break;
//         case 'signup':
//             component = <SignupFormContainer />;
//             break;
//         default:
//             return null;
//     }
//     return (
//         <div className="modal-background" onClick={closeModal}>
//             <div className="modal-child" onClick={e => e.stopPropagation()}>
//                 {component}
//             </div>
//         </div>
//     );
// }

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);