import React, { Component } from 'react';
// import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div inverse staticTop>
          
              <a >Ecommerce</a>
           
        </div>

        
             
              <ProductList />
            
          
              <ShoppingCart />
               
      </div>
    );
  }
}

export default App;
