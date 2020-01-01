import React from 'react';
import BoardIndexItem from './board_item';
import CreateBoardFormContainer from './create_board_form_container';
import {withRouter} from 'react-router-dom';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestBoards(this.props.match.params.userId);
    }

    render() {
        const { boards, deleteBoard } = this.props;
        // debugger;
        return (
            <section className="boards-index">
                {/* <CreateBoardFormContainer/> */}
                <ul>
                    
                    {boards.map(board => <BoardIndexItem key={board.id} board={board} deleteBoard={deleteBoard}/>)}
                </ul>
               
            </section>
        )
    }
}

export default withRouter(BoardIndex);