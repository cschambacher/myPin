import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestSingleBoard } from '../../actions/boards_actions';
import { selectBoard } from '../../reducer/selectors';

const mapStateToProps = (state, ownProps) => {
    const boardId = parseInt(ownProps.match.params.boardId); 
    const board = selectBoard(state, boardId);
    debugger;
    return {
        boardId,
        board
    }; 
};

const mapDispatchToProps = dispatch => ({
    requestSingleBoard: boardId => dispatch(requestSingleBoard(boardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);