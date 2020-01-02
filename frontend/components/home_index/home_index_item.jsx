import React from 'react';
import { Route, Link } from 'react-router-dom';

const pinSaved = (board, pin) => {
    if (board.pins.some(pinEl => (pinEl.id === pin.id))) {
        return " saved";
    } else {
        return " unsaved";
    }
};

const HomeIndexItem = ({ pin, boards, savePin }) => {
    // debugger;
    return (
        <li className="item-home-index">
            <div className="pin-list">
                <nav className="pin-list-submit-dropdown">
                    <span className="pin-list-submit">Save</span>

                    <div className="pin-list-submit-dropdown-content">
                        {boards.map(board =>
                            <div className="pin-list-submit-board" key={board.id} onClick={() => savePin(board, pin.id)}>
                                {board.title} {pinSaved(board, pin)}
                            </div>)}
                    </div>
                </nav>
                <Link to={`/pins/${pin.id}`}>
                    <img src={pin.photoUrl} />

                </Link>
            </div>
            <div className="pin-footer">{pin.title}</div> 
            {/* <Link to={`/pins/${pin.id}`}>
                <span>{pin.title}</span>
                <img src={pin.photoUrl} />
            </Link> */}
        </li>
    
    );
}

export default HomeIndexItem;