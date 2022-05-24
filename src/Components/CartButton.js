import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <Link to="/Meu-Carrinho">
        <button
          data-testid="shopping-cart-button"
          name="button-cart"
          type="button"
        >
          Carrinho
        </button>
      </Link>

    );
  }
}

export default CartButton;
