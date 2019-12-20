import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Home from './home';

const mstp = ({ session, entities }) => {
    // debugger;
    return {
        currentUser: entities.users[session.id],
    };
};

const mdtp = dispatch => ({
    logout: ()=> dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mstp, mdtp)(Home)