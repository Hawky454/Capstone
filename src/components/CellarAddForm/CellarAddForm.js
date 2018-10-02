import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './CellarAddForm.css';

class CellarAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
         image: '',
         age: null,
         brand: '',
         price: null,
         blend: '',
         weight: null,
         purchased: '',
         available: false,
         source: '',
         rating: null
        }
      }
      

     handleChange = (event) => {
       console.log(event.target.value);
     }
    
     addTobacco = (event) => {
       event.preventDefault();
       let newCellarData = {
         image: this.refs.image.value,
         age: this.refs.age.value,
         brand: this.refs.brand.value,
         price: this.refs.price.value,
         blend: this.refs.blend.value,
         weight: this.refs.weight.value,
         purchased: this.refs.purchased.value,
         available: this.refs.available.value,
         source: this.refs.source.value,
         rating: this.refs.rating.value
       }
       let request = new Request('api/cellar', {
         method: 'POST',
         headers: new Headers({'Content-Type': 'application/json'}),
         body: JSON.stringify(newCellarData)
       });
       fetch(request)
         .then((res) => {
           res.json()
           .then((newCellarData) => {
             console.log(newCellarData);
           });
         });
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
            <form ref="cellarAdd" className="add" method="POST">
              <section id="form-card" className="form-card hidden">
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="image">Image URL</label>
                    <input type="text" ref="image" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Image URL" name="image"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="age">Age</label>
                    <input type="text" ref="age" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Age" name="age"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="brand">Brand</label>
                    <input type="text" ref="brand" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Brand" name="brand"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="price">Price</label>
                    <input type="text" ref="price" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Price" name="price"/>
                  </section>
                </section>
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="blend">Blend</label>
                    <input type="text" ref="blend" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Blend" name="blend"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="weight">Weight</label>
                    <input type="text" ref="weight" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Weight" name="weight"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="purchased">Purchase Date</label>
                    <input type="text" ref="purchased" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Purchase Date" name="purchased"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="available">Available</label>
                    <input type="text" ref="available" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Available" name="available"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="source">Source</label>
                    <input type="text" ref="source" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Source" name="source"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="rating">Rating (1 - 5)</label>
                    <input type="text" ref="rating" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Rating (1 - 5)" name="rating"/>
                  </section>
                </section>
                <button onClick={this.addTobacco} type="submit" className="btn btn-primary">Add Blend!</button>
                <Link to="/CellarList"><button style={myBtn}>Back &rarr;</button></Link>
              </section>
            </form>
            <Footer />
          </div>
         );
    }
}
 
export default CellarAddForm;