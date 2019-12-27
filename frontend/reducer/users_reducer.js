import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SINGLE_USER, RECEIVE_USERS} from '../actions/users_actions'
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let user;
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, action.users);
        case RECEIVE_SINGLE_USER:
            user = action.user
            return Object.assign({}, state, { [user.id]: user });
        case RECEIVE_CURRENT_USER:
            // debugger;
            return Object.assign({}, state, { [action.user.id]: action.user });       
        default:
            return state;
    }
};

export default usersReducer;