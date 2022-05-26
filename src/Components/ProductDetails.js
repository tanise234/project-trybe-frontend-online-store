import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addItem } from '../services/saveProduct';
import CartButton from './CartButton';

class ProductDetails extends React.Component {
  state = {
    product: {},
  }
  // const { addToCart } = this.props;

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const getFetch = await fetch(url);
    const dataJson = await getFetch.json();
    this.setState({ product: dataJson });
  }

  handleCartClick(cartItem) {
    addItem(cartItem);
  }

  render() {
    const { product } = this.state;
    const { thumbnail: image, title: name, price } = product;
    console.log(product);
    return (
      <div>
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
        <h1 data-testid="product-detail-name">{`${name} - ${price}`}</h1>
        <img src={ image } alt="foto do produto" />
        <p>{name}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.handleCartClick(product) }
        >
          Adicionar ao Carrinho

        </button>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
