import React from 'react';
import { Route, Link } from 'react-router-dom';


const BoardsIndexItem = ({ board, deleteBoard }) => {
    // debugger;

    return (
        <li className="item-board-index">
            <Link to={`/boards/${board.id}`}>
                <h1>{board.title}</h1>
                    <ul>
                    {board.pins.map(pin => 
                        <li key={board.id} className="small-pin"><img src={pin.photoUrl} /></li>)}
                    </ul>
            </Link>
            <Link to={`/boards/${board.id}/edit`}>Edit</Link>
            <button onClick={() => deleteBoard(board.id)}>Remove</button>
        </li>
    );
}

export default BoardsIndexItem;