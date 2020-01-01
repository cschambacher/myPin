import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModalForm } from '../../actions/modal_form_actions';
import Greeting from './greeting';

const mstp = ({ session, entities }) => {
    // debugger;
    return {
        currentUser: entities.users[session.id],
    };
};

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    openModalForm: modalform => dispatch(openModalForm(modalform))
});


export default connect(mstp, mdtp)(Greeting)