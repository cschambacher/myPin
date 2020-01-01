import React from 'react';
import { connect } from 'react-redux';
import BoardForm from './board_form';
import { requestSingleBoard, updateBoard } from '../../actions/boards_actions';
import {withRouter} from 'react-router-dom';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        // this.formType = this.props.formType;

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }
    componentDidMount() {
        this.props.requestSingleBoard(this.props.match.params.boardId);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        // const board = this.state;
        this.props.action(this.state)
            .then(data => (this.props.history.push(`/boards/${data.board.id}`)));

    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    render() {
        const { action, formType, board } = this.props;
        if (!board) return null;
        debugger;
        return (
            <div className="board-form-container">
                <form onSubmit={this.handleSubmit} className="board-form-box">
                    <nav className="board-form-header">
                        <h3>{this.props.formType}</h3>
                        <div onClick={this.props.closeModalForm} className="close-x">X</div>
                    </nav>
                    <div className="board-form">
                        <label>
                            Title
                            <input
                                type='text'
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="board-input"
                            />
                        </label>
                        <br />
                        <label>
                            Private
                            <input
                                // type="checkbox"
                                value={this.state.private}
                                onChange={this.update('private')}
                                className="board-input"
                            />
                        </label>
                        <br />
                        <input className="board-submit" type='submit' value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}
    


// class EditBoardForm extends React.Component {
//     componentDidMount() {
//         this.props.requestSingleBoard(this.props.match.params.boardId);
//     }

//     render() {
//         const { action, formType, board } = this.props;

//         if (!board) return null;
//         return (
//             <BoardForm
//                 action={action}
//                 formType={formType}
//                 board={board} />
//         );
//     }
// }

const mapStateToProps = (state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    formType: 'Edit Board'
});

const mapDispatchToProps = dispatch => ({
    requestSingleBoard: boardId => dispatch(requestSingleBoard(boardId)),
    action: board => dispatch(updateBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditBoardForm));