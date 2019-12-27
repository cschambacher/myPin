import React from 'react';
import { Route, Link } from 'react-router-dom';



const BoardsIndexItem = ({ board, deleteBoard }) => {
    // debugger;
    return (
        <li className="item-pin-index">
            <Link to={`/boards/${board.id}`}>
                <span>{board.title}</span>
                {/* <img src={pin.photoUrl} /> */}
                {/* <span>{pin.description}</span> */}
            </Link>
            <Link to={`/boards/${board.id}/edit`}>Edit</Link>
            <button onClick={() => deleteBoard(board.id)}>Remove</button>
        </li>
    );
}

export default BoardsIndexItem;