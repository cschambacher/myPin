import React from 'react';
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {
   
    componentDidMount() {
        this.props.requestSingleBoard(this.props.boardId);
    }

    render() {
        const { boardId, board } = this.props;
        debugger;
        return (
            <div>
                <h1>{board.title}</h1>
                {/* <img src={pin.photoUrl}/> */}
                <p>{board.private}</p>
                <Link to="/" />
            </div>
        );
    }
}

export default BoardShow;