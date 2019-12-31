import React from 'react';
import { Route, Link } from 'react-router-dom';



const PinsIndexItem = ({ pin, deletePin }) => {
    // debugger;
    return (
        <li className="item-pin-index">
            <div className="pin-list">
                <Link to={`/pins/${pin.id}/edit`}>
                <span className="icon-edit-list">
                    <i className="fas fa-pen fa-1x"></i>
                </span></Link>
                <div className="pin-list-submit">Save</div>
                <Link to={`/pins/${pin.id}`}>
                    {/* <span>{pin.title}</span> */}
                    <img src={pin.photoUrl} />
                
                </Link>
                <button className="pin-list-btn" onClick={() => deletePin(pin.id)}>Remove</button>
            </div>
            <div className="pin-footer">{pin.description}</div> 
        </li>
    );
}

export default PinsIndexItem;