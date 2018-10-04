import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

class PipesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: '',
          brand: '',
          pipemaker: '',
          year: '',
          price: '',
          smooth: '',
          sandblasted: '',
          available: '',
          source: '',
          rating: ''
         }
    }

    clearPipeForm = (event) => {
      this.setState({
       image: '',
       brand: '',
       pipemaker: '',
       year: '',
       price: '',
       smooth: '',
       sandblasted: '',
       available: '',
       source: '',
       rating: ''
      });
    }


    addPipes = (event) => {
      event.preventDefault();
      let newPipeData = {
        image: this.refs.image.value,
        brand: this.refs.brand.value,
        pipemaker: this.refs.pipemaker.value,
        year: this.refs.year.value,
        price: this.refs.price.value,
        smooth: this.refs.smooth.value,
        sandblasted: this.refs.sandblasted.value,
        source: this.refs.source.value,
        rating: this.refs.rating.value
      }
      let request = new Request('api/pipes', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(newPipeData)
      });
      fetch(request)
        .then((res) => {
          res.json()
          .then((newPipeData) => {
            console.log(newPipeData);
          });
        });
        this.clearPipeForm();
     }



     handleChange = (event) => {
       this.setState({
         [event.target.name]: event.target.value,
       });
       console.log('[PipesAddForm] state:',this.state);
     }

   



    render() { 
        // const myBtn = {
        //     height: 48,
        //     width: 130.89,
        //     borderRadius: 5,
        //     marginTop: 10,
        //     backgroundColor: '#494942',
        //     color: '#f7f7df'
        // }
        const myBtn = {
          color: 'white',
          textDecoration: 'none',
          width: 100,
          height: 80,
          border: '1px solid red'
        }



        return (  
            <div>
            <NavBar />
            <form ref="pipesAddForm" className="add" method="POST">
              <section id="form-card" className="form-card hidden">
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="imgUrl">Image URL</label>
                    <input type="text" ref="image" value={this.state.image} onChange={this.handleChange} className="form-control" placeholder="Image URL" name="image"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="brand">Brand</label>
                    <input type="text" ref="brand" value={this.state.brand} onChange={this.handleChange} className="form-control" placeholder="Brand" name="brand"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="Pipe Maker">Pipe Maker</label>
                    <input type="text" ref="pipemaker" value={this.state.pipemaker} onChange={this.handleChange} className="form-control" placeholder="Pipe Maker" name="pipemaker"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="year">Year</label>
                    <input type="text" ref="year" value={this.state.year} onChange={this.handleChange} className="form-control" placeholder="Year (YYYY)" name="year"/>
                  </section>
                </section>
                <section className="form-row">
                  <section className="form-group col-md-6">
                    <label htmlFor="price">Price</label>
                    <input type="text" ref="price" value={this.state.price} onChange={this.handleChange} className="form-control" placeholder="Price" name="price"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="smooth">Smooth?</label>
                    <input type="text" ref="smooth" value={this.state.smooth} onChange={this.handleChange} className="form-control" placeholder="True/False" name="smooth"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="sandblasted">Sandblasted?</label>
                    <input type="text" ref="sandblasted" value={this.state.sandblasted} onChange={this.handleChange} className="form-control" placeholder="True/False" name="sandblasted"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="source">Source</label>
                    <input type="text" ref="source" value={this.state.source} onChange={this.handleChange} className="form-control" placeholder="Source" name="source"/>
                  </section>
                  <section className="form-group col-md-6">
                    <label htmlFor="rating">Rating (1 -5)</label>
                    <input type="text" ref="rating" value={this.state.rating} onChange={this.handleChange} className="form-control" placeholder="Rating" name="rating"/>
                  </section>
                  </section>
                  <button onClick={this.addPipes} type="submit" className="btn btn-primary"><Link to="/Pipes" style={myBtn}>Add Pipe!</Link></button>
                </section>
              </form>
            <Footer />
          </div>
        );
    }
}
 
export default PipesAddForm;