import React from 'react';
import { connect } from 'react-redux';
import BoardForm from './board_form';
import { requestSingleBoard, updateBoard } from '../../actions/boards_actions';


class EditBoardForm extends React.Component {
    componentDidMount() {
        this.props.requestSingleBoard(this.props.match.params.boardId);
    }

    render() {
        const { action, formType, board } = this.props;

        if (!board) return null;
        return (
            <BoardForm
                action={action}
                formType={formType}
                board={board} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    formType: 'Edit Board'
});

const mapDispatchToProps = dispatch => ({
    requestSingleBoard: boardId => dispatch(requestSingleBoard(boardId)),
    action: board => dispatch(updateBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);