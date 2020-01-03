import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestSingleBoard, requestBoards } from '../../actions/boards_actions';
import { selectBoard, selectAllBoards } from '../../reducer/selectors';
import { requestPins, deletePin, savePin } from '../../actions/pins_actions';

const mapStateToProps = (state, ownProps) => {
    const boardId = parseInt(ownProps.match.params.boardId); 
    const board = selectBoard(state, boardId);
    const boards = selectAllBoards(state)
    // debugger;
    return {
        boardId,
        board,
        boards
    }; 
};

const mapDispatchToProps = dispatch => ({
    requestSingleBoard: boardId => dispatch(requestSingleBoard(boardId)),
    requestBoards: (userId) => dispatch(requestBoards(userId)),
    savePin: (board, userId) => dispatch(savePin(board, userId)),
    deletePin: pinId => dispatch(deletePin(pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);