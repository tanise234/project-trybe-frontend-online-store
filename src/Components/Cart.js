import React from 'react';
// import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { getSavedItens } from '../services/saveProduct';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartListRepeated: [],
    };

    this.handleCartList = this.handleCartList.bind(this);
  }

  componentDidMount() {
    const setCartList = getSavedItens();
    const setList = this.handleCartList(setCartList);
    console.log(setList);
    this.setState({ cartListRepeated: setList });
  }

  handleCartList(cartList) {
    const objList = cartList.reduce((acc, elem) => {
      if (!acc[0].product) {
        const prodObj = { product: elem, quantity: 1 };
        acc.splice(0, 1, prodObj);
      } else {
        const itemList = acc.find((p) => p.product.id === elem.id);
        const index = acc.indexOf(itemList);
        if (itemList) {
          const prodObj = {
            product: elem,
            quantity: parseInt(itemList.quantity, 10) + 1,
          };
          acc.splice(index, 1, prodObj);
        } else {
          const prodObj = { product: elem, quantity: 1 };
          acc.push(prodObj);
        }
      }

      // console.log(acc);

      return acc;
    }, [{ product: '', quantity: 0 }]);
    return objList;
  }

  render() {
    const { cartListRepeated } = this.state;
    return (
      <div>
        {cartListRepeated.length ? (
          <CartItem cartList={ cartListRepeated } />
        ) : (
          <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        )}
      </div>

    );
  }
}

// Cart.propTypes = {
//   cartListRepeated: PropTypes.shape({
//     product: PropTypes.arrayOf,
//     quantity: PropTypes.number,
//   }).isRequired,
// };

export default Cart;
