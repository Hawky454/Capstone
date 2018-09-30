import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import classes from './CellarList.css';
import Cellar from '../Cellar/Cellar';

const CellarList = (props) => {
    return(
        <div className={classes.CellarList}>
            <NavBar />    
              <div className={classes.container}>
                 <Cellar />
              </div>
            <Footer />
        </div>

    );
}

export default CellarList; 