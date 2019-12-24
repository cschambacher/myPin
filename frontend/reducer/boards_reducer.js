import { RECEIVE_BOARDS, RECEIVE_HOME_BOARDS, RECEIVE_SINGLE_BOARD, REMOVE_BOARD } from '../actions/pins_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);

    let board;
    switch (action.type) {
        case RECEIVE_BOARDS:
        case RECEIVE_HOME_BOARDS:
            return Object.assign({}, action.boards);
        case RECEIVE_SINGLE_BOARD:
            board = action.board
            debugger;
            return Object.assign({}, state, { [board.id]: board });
        case REMOVE_BOARD:
            let nextState = Object.assign({}, state);
            delete nextState[action.boardId]
            return nextState;
        default:
            return state;
    }
};

export default boardsReducer;