import { RECEIVE_BOARD_ERRORS } from '../actions/boards_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return [...action.errors];
        default:
            return state;
    }
};