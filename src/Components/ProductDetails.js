import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  state = {
    product: {},
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const getFetch = await fetch(url);
    const dataJson = await getFetch.json();
    this.setState({ product: dataJson });
  }

  render() {
    const { product: { thumbnail: image, title: name, price } } = this.state;
    return (
      <div>
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
        <h1 data-testid="product-detail-name">{`${name} - ${price}`}</h1>
        <img src={ image } alt="foto do produto" />
        <p>{name}</p>
        <Link to="/ShoppingCart">
          <button type="button">Comprar</button>
        </Link>
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
