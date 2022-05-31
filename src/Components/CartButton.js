import React from 'react';
import { Link } from 'react-router-dom';
import { getSavedItens } from '../services/saveProduct';

class CartButton extends React.Component {
  render() {
    const { qnt } = this.props;
    return (
      <Link to="/Meu-Carrinho">
        <button
          data-testid="shopping-cart-button"
          name="button-cart"
          type="button"
        >
          Carrinho
        </button>
        <span data-testid="shopping-cart-size">{qnt}</span>
      </Link>

    );
  }
}

export default CartButton;
