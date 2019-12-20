import React from 'react';
import { Route, Link } from 'react-router-dom';



const HomeIndexItem = ({ pin, testUrl }) => {

    return (
        <li className="item-home-index">
            <Link to={`/pins/${pin.id}`}>
                <span>{pin.title}</span>
                <img src={testUrl} />
                <span>{pin.description}</span>
            </Link>
        </li>
    
    );
}

export default HomeIndexItem;