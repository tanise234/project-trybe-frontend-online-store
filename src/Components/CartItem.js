import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { cartList } = this.props;
    return (
      cartList.map((item) => (
        <div key={ item.product.id }>
          <img alt={ item.product.title } src={ item.product.thumbnail } />
          <h3 data-testid="shopping-cart-product-name">{ item.product.title }</h3>
          <p>{ item.product.price }</p>
          <span data-testid="shopping-cart-product-quantity">{item.quantity}</span>
        </div>))
    );
  }
}

CartItem.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CartItem;
