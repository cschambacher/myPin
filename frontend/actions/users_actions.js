export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
import * as APIUtil from '../util/users';

export const requestUsers = () => (dispatch) => {
    return APIUtil.getUsers()
        .then(users => { dispatch(receiveUsers(users)) });
}

export const requestSingleUser = (userId) => (dispatch) => {
    return APIUtil.getSingleUser(userId).then(user => {
        dispatch(receiveSingleUser(user));
        return user;
    }).fail(err => dispatch(receiveUserErrors(err.responseJSON)))
}

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveSingleUser = user => ({
    type: RECEIVE_SINGLE_USER,
    user
});

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});