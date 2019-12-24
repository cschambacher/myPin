import * as APIUtil from '../util/boards';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const CREATE_BOARD = 'CREATE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';


export const requestBoards = () => (dispatch) => {
    return APIUtil.getBoards()
        .then(boards => { dispatch(receiveBoards(boards)) });
}

// export const requestHomeBoards = () => (dispatch) => {
//     return APIUtil.getHomeBoards()
//         .then(boards => { dispatch(receiveHomeBoards(boards)) });
// }

export const requestSingleBoard = (boardId) => (dispatch) => {
    return APIUtil.getSingleBoard(boardId).then(board => {
        dispatch(receiveSingleBoard(board));
        return board;
    }).fail(err => dispatch(receiveBoardErrors(err.responseJSON)))
}

export const createBoard = board => dispatch => (
    APIUtil.createBoard(board).then(board => {
        dispatch(receiveSingleBoard(board));
        return board;
    }).fail(err => dispatch(receiveBoardErrors(err.responseJSON)))
);

export const updateBoard = board => dispatch => (
    APIUtil.updateBoard(board)
        .then(board => dispatch(receiveSingleBoard(board)))
        .fail(err => dispatch(receiveBoardErrors(err.responseJSON)))
);

export const deleteBoard = boardId => dispatch => (
    APIUtil.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)))
);
const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
});
// const receiveHomeBoards = boards => ({
//     type: RECEIVE_HOME_BOARDS,
//     boards
// });

const receiveSingleBoard = board => ({
    type: RECEIVE_SINGLE_BOARD,
    board
});

const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
});

export const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});
