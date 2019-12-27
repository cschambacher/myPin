import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestSingleUser } from '../../actions/users_actions';
import { selectUser } from '../../reducer/selectors';
import Profile from './profile';

const mstp = (state, ownProps) => {
    const userId = parseInt(ownProps.match.params.userId);
    const user = selectUser(state, userId);
    
    return {
        userId,
        user
    }; 
};

const mdtp = dispatch => ({
    requestSingleUser: userId => dispatch(requestSingleUser(userId))
});


export default connect(mstp, mdtp)(Profile)