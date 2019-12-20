import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Header from './header';

const mstp = ({ session, entities }) => {
    return {
        currentUser: entities.users[session.id],
    };
};

const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    };
};


export default connect(mstp, mdtp)(Header)