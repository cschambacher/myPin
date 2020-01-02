import React from 'react';
import BoardIndex from './board_index';
import { requestBoards, deleteBoard, savePin } from '../../actions/boards_actions';
import { selectAllBoards } from '../../reducer/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // debugger;
    return {
    boards: selectAllBoards(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestBoards: (userId) => dispatch(requestBoards(userId)),
    savePin: (board, userId) => dispatch(savePin(board, userId)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
