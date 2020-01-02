import React from 'react';
import { Route, Link } from 'react-router-dom';



const PinsIndexItem = ({ pin, boards, deletePin, savePin }) => {
    // debugger;
    return (
        <li className="item-pin-index">
            <div className="pin-list">
                <Link to={`/pins/${pin.id}/edit`}>
                <span className="icon-edit-list">
                    <i className="fas fa-pen fa-1x"></i>
                </span></Link>
                <div className="pin-list-submit">Save</div>
                <div className="pin-list-submit-dropdown">
                    {boards.map(board => <div key={board.id} onClick={()=>savePin(board, pin.id)}>{board.title}</div>)}
                </div>
                <Link to={`/pins/${pin.id}`}>
                    <img src={pin.photoUrl} />
                
                </Link>
                <button className="pin-list-btn" onClick={() => deletePin(pin.id)}>Remove</button>
            </div>
            <div className="pin-footer">{pin.description}</div> 
        </li>
    );
}

export default PinsIndexItem;