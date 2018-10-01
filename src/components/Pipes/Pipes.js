// import React, { Component } from 'react';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import PipeList from '../PipeList/PipeList';
import classes from './Pipes.css';



const Pipes = (props) => {
    return(
        <div className={classes.Pipes}>
        <NavBar />    
          <div className={classes.container}>
            <PipeList />
          </div>
        <Footer />
    </div>
    );
}

export default Pipes;