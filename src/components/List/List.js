import React from 'react';
import NavBar from '../NavBar/NavBar';
import '../../index.css'
import './List.css'

const List = (props) => {
    return(
        <div className="List">
            <NavBar />
            <h1>This is just a crude example to see if I can make routes work.</h1>
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
    );
}

export default List;