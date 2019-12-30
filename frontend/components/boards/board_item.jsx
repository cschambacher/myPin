import React from 'react';
import { Route, Link } from 'react-router-dom';


const BoardsIndexItem = ({ board, deleteBoard }) => {
    // debugger;

    return (
        <li className="item-board-index">
            <Link to={`/boards/${board.id}`}>   
                    <ul className="item-board">
                    {/* {board.pins.map(pin =>  */}
                    <li key={`${board.id}-1`} className="small-pin-1"><img src={(board.pins[0]) ? board.pins[0].photoUrl : null } /></li>
                    <li key={`${board.id}-2`} className="small-pin-2"><img src={(board.pins[1]) ? board.pins[1].photoUrl : null } /></li>
                    <li key={`${board.id}-3`} className="small-pin-3"><img src={(board.pins[2]) ? board.pins[2].photoUrl : null } /></li>
                    <li key={`${board.id}-4`}className="small-pin-4"><img src={(board.pins[3]) ? board.pins[3].photoUrl : null } /></li>
                    <li key={`${board.id}-5`} className="small-pin-5"><img src={(board.pins[4]) ? board.pins[4].photoUrl : null } /></li>
                    <li key={`${board.id}-6`} className="small-pin-6"><img src={(board.pins[5]) ? board.pins[5].photoUrl : null } /></li>
                    </ul>
                <h1>{board.title}</h1>
            </Link>
            <Link to={`/boards/${board.id}/edit`}>Edit</Link>
            <button onClick={() => deleteBoard(board.id)}>Remove</button>
        </li>
    );
}

export default BoardsIndexItem;