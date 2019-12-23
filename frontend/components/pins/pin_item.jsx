import React from 'react';
import { Route, Link } from 'react-router-dom';



const PinsIndexItem = ({ pin, deletePin }) => {
    // debugger;
    return (
        <li className="item-pin-index">
            <Link to={`/pins/${pin.id}`}>
                {/* <span>{pin.title}</span> */}
                <img src={pin.photoUrl} />
                {/* <span>{pin.description}</span> */}
            </Link>
            <Link to={`/pins/${pin.id}/edit`}>Edit</Link>
            <button onClick={() => deletePin(pin.id)}>Remove</button>
        </li>
    );
}

export default PinsIndexItem;