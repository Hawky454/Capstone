import React from 'react';
import classes from './Home.css';

const Home = (props) => {
    
    return(
        <div className={classes.Home}>
          <div>
            <section className={classes.rectangleTop}>
              <p>The Tobacco Cellar</p>
            </section>
            <div className={classes.container}>
              <section className={classes.card1}>
              </section>
              <section className={classes.card2}>
              </section>
              <section className={classes.card3}>
              </section>
            </div>
            <section className={classes.rectangleBottom}>
              <p>Is finally here!</p>
            </section>
          </div>
        </div>
    );
}

export default Home;