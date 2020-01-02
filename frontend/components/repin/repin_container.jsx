import React from 'react';
import { connect } from 'react-redux';
import { requestBoards, savePin } from '../../actions/boards_actions';
import { selectAllPins, selectAllBoards } from '../../reducer/selectors';
import { requestSinglePin, deletePin } from '../../actions/pins_actions';
import { selectPin } from '../../reducer/selectors';
import { withRouter } from 'react-router-dom';

class Repin extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.boards;

        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.requestBoards(this.props.match.params.userId);
    }

    render() {
        const { boards, pin, savePin } = this.props;
        return (
            <div className="repin-form-container">
                <form>
                    {/* <div className="repin-top">
                        <button className="pin-submit" type='submit'>Save</button>
                    </div> */}
                    <div className="pin-list-submit-dropdown">
                        <ul>
                        {boards.map(board => <li key={board.id} onClick={() => savePin(board, pin.id)}>{board.title}</li>)}
                        </ul>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    boards: selectAllBoards(state),
});

const mapDispatchToProps = dispatch => ({
    requestBoards: (userId) => dispatch(requestBoards(userId)),
    savePin: (board, userId) => dispatch(savePin(board, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Repin));