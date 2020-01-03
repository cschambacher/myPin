import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from '../pins/pin_item';

class BoardShow extends React.Component {
   
    componentDidMount() {
        this.props.requestSingleBoard(this.props.boardId);
        this.props.requestBoards(this.props.userId);
    }
    privacy(board){
        if (board.private){
            return <small> saved</small>;
        } else {
            return <small> not saved</small>;
        }
    }

    render() {
        const { boardId, board, boards, savePin, deletePin } = this.props;
        
        if (!board.pins) return null;
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
                       
                            <PinIndexItem pin={pin} boards={boards} savePin={savePin} deletePin={deletePin} />
                        )}
                    </ul>
                
                </div>
            </div>
        );
    }
}

export default BoardShow;