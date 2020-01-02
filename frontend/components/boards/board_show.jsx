import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from '../pins/pin_item';

class BoardShow extends React.Component {
   
    componentDidMount() {
        this.props.requestSingleBoard(this.props.boardId);
        this.props.requestBoards(this.props.match.params.userId);
    }
    privacy(board){
        if (board.private){
            return "private";
        } else {
            return "public";
        }
    }

    render() {
        const { boardId, board, boards, savePin, deletePin } = this.props;
        debugger;
        return (
            <div className="board-show">
                <div className="board-show-header">
                    <h1>{board.title}</h1>
                    <p>{this.privacy(board)}</p>
                    <span className="icon-back-arrow"><Link to="/users/:userId/boards"><i className="fas fa-arrow-left fa-2x"></i></Link>
                    </span>
                </div>
                <div className="masonry-board-show-pins">
                    <ul>
                        {board.pins.map(pin => 
                        <li className="item-board-show-pins"><PinIndexItem key={pin.id} pin={pin} boards={boards} savePin={savePin} deletePin={deletePin} /></li>)}
                    </ul>
                
                </div>
            </div>
        );
    }
}

export default BoardShow;