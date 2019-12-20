import React from 'react';
import { Route, Link } from 'react-router-dom';

const PinsIndexItem = ({ pin }) => {

    return (
        <li className="pin-index-item">
            <Link to={`/pins/${pin.id}`}>
                <span>{pin.title}</span>
                <img src={"https://i.pinimg.com/564x/68/57/b4/6857b465e7015773582fed0e2e5b26cf.jpg"} />
                <span>{pin.description}</span>
            </Link>
        </li>
    );
}

export default PinsIndexItem;