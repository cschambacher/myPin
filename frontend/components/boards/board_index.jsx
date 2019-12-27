import React from 'react';
import BoardIndexItem from './board_item';
import CreateBoardFormContainer from './create_board_form_container';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestBoards();
    }

    render() {
        const { boards, deleteBoard } = this.props;
        debugger;
        return (
            <section className="masonry-pin-index">
                <ul>
                    {boards.map(board => <BoardIndexItem key={board.id} board={board} deleteBoard={deleteBoard}/>)}
                </ul>
                <CreateBoardFormContainer />
            </section>
        )
    }
}

export default BoardIndex;