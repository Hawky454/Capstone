import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import classes from './CellarList.css';
import Cellar from '../Cellar/Cellar';


//! this is the actually page that shows, it's all being populated by the Cellar component, originally I would have preferred that the names be reversed but I'm not going to get started on that now.


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