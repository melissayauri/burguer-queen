import React, { Component } from 'react';
// import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../store'

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }
    store.subscribe(()=>{
      this.setState({
        cart: store.getState().cart
      })
    })
  }

  render() {
    return (
      <div header="Shopping Cart">
        <div fill>
          <tbody>
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}><img glyph="trash" /></button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </div>

      </div>
    )
  }

  removeFromCart(product) {
    store.dispatch({
      type: 'REMOVE_TO_CART',
      product
    })
  }
}

export default ShoppingCart;
