import React from 'react';
import { Route, Link } from 'react-router-dom';


const pinSaved = (board, pin) => {
    if (board.pins.some(pinEl => (pinEl.id === pin.id))){
        return <small> saved</small>;
    } else {
        return <small> not saved</small>;
    }
};

const PinsIndexItem = ({ pin, boards, deletePin, savePin }) => {
   
    return (
        <li key={pin.id} className="item-pin-index">
            <div className="pin-list">
                <Link to={`/pins/${pin.id}/edit`}>
                <span className="icon-edit-list">
                    <i className="fas fa-pen fa-1x"></i>
                </span></Link>
                <nav className="pin-list-submit-dropdown">
                    <span className="pin-list-submit">Save</span>
                    
                    <div className="pin-list-submit-dropdown-content">
                        {boards.map(board => 
                            <div className="pin-list-submit-board" key={board.id} onClick={()=>savePin(board, pin.id)}>
                            {board.title} {pinSaved(board, pin)}
                        </div>)}
                    </div>
                </nav>
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