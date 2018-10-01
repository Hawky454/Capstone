import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

class PipesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }




    render() { 
        const myBtn = {
            height: 48,
            width: 130.89,
            borderRadius: 5,
            marginTop: 10,
            backgroundColor: '#494942',
            color: '#f7f7df'
        }



        return (  
            <div>
            <NavBar />
            <form className="add" method="POST" action="/add">
              <section id="form-card" className="form-card hidden">
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="imgUrl">Image URL</label>
                    <input type="text" className="form-control" placeholder="Image URL" name="imgUrl"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="brand">Brand</label>
                    <input type="text" className="form-control" placeholder="Brand" name="brand"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="Pipe Maker">Pipe Maker</label>
                    <input type="text" className="form-control" placeholder="Pipe Maker" name="pipe maker"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="year">Year</label>
                    <input type="text" className="form-control" placeholder="Year" name="year"/>
                  </section>
                </section>
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" placeholder="Price" name="price"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="smooth">Smooth?</label>
                    <input type="text" className="form-control" placeholder="True/False" name="smooth"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="sandblasted">Sandblasted?</label>
                    <input type="text" className="form-control" placeholder="True/False" name="sandblasted"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="source">Source</label>
                    <input type="text" className="form-control" placeholder="Source" name="source"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="rating">Rating (1 -5)</label>
                    <input type="text" className="form-control" placeholder="Rating" name="rating"/>
                  </section>
                  {/* <section className="form-group col-md-6">
                    <label htmlFor="rating">Rating (1 - 5)</label>
                    <input type="text" className="form-control" placeholder="Rating (1 - 5)" name="rating"/>
                  </section> */}
                </section>
                <button type="submit" className="btn btn-primary">Add Blend!</button> <br/>
                <Link to="/Pipes"><button style={myBtn} >Back &rarr;</button></Link>
              </section>
            </form>
            <Footer />
          </div>
        );
    }
}
 
export default PipesAddForm;