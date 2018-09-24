import React from 'react';
import NavBar from '../NavBar/NavBar';
// import './Pipes.css';



const Pipes = (props) => {
    return(
        <div className="Pipes">
            <NavBar />
            <br/>
            <button>One</button>
            <button>And a</button>
            <button>Two</button>
        </div>
    );
}

export default Pipes;