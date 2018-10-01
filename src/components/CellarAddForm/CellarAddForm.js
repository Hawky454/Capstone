import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './CellarAddForm.css';

class CellarAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //possible colorz for button: #494942, #808080
    
    render() { 
        const myBtn = {
            height: 48,
            width: 130.89,
            borderRadius: 5,
            marginLeft: 138,
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
                    <label htmlFor="age">Age</label>
                    <input type="text" className="form-control" placeholder="Age" name="age"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="brand">Brand</label>
                    <input type="text" className="form-control" placeholder="Brand" name="brand"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" placeholder="Price" name="price"/>
                  </section>
                </section>
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="blend">Blend</label>
                    <input type="text" className="form-control" placeholder="Blend" name="blend"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="weight">Weight</label>
                    <input type="text" className="form-control" placeholder="Weight" name="weight"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="purchase-date">Purchase Date</label>
                    <input type="text" className="form-control" placeholder="Purchase Date" name="date"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="is-available">Available</label>
                    <input type="text" className="form-control" placeholder="Available" name="available"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="source">Source</label>
                    <input type="text" className="form-control" placeholder="Source" name="source"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="rating">Rating (1 - 5)</label>
                    <input type="text" className="form-control" placeholder="Rating (1 - 5)" name="rating"/>
                  </section>
                </section>
                <button type="submit" className="btn btn-primary">Add Blend!</button>
                <Link to="/CellarList"><button style={myBtn}>Back &rarr;</button></Link>
              </section>
            </form>
            <Footer />
          </div>
         );
    }
}
 
export default CellarAddForm;