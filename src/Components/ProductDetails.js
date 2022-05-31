import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addItem } from '../services/saveProduct';
import CartButton from './CartButton';

class ProductDetails extends React.Component {
  state = {
    product: {},
    email: '',
    rating: '',
    desc: '',
  };
  // const { addToCart } = this.props;

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const getFetch = await fetch(url);
    const dataJson = await getFetch.json();
    this.setState({ product: dataJson });
  }

  handleCartClick(cartItem) {
    addItem(cartItem);
  }

  handleEvaluation = () => {
    this.setState({});
  };

  handleOnInput({ target: { name, type, checked, value } }) {
    const checkedValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: checkedValue });
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
        <div>
          <h4>Avaliação</h4>
          <form>
            <label htmlFor="input-email">
              <input
                type="email"
                data-testid="product-detail-email"
                value={ email }
                name="email"
                id="input-email"
                onChange={ this.handleInput }
              />
            </label>
            <div>
              <label htmlFor="input-radio">
                <input
                  type="radio"
                  id="input-radio"
                  value={ rating }
                  name="rating"
                  data-testid={ `${index}-rating` }
                />
                <input
                  type="radio"
                  id="input-radio"
                  value={ rating }
                  name="rating"
                  data-testid={ `${index}-rating` }
                />
                <input
                  type="radio"
                  id="input-radio"
                  value={ rating }
                  name="rating"
                  data-testid={ `${index}-rating` }
                />
                <input
                  type="radio"
                  id="input-radio"
                  value={ rating }
                  name="rating"
                  data-testid={ `${index}-rating` }
                />
                <input
                  type="radio"
                  id="input-radio"
                  value={ rating }
                  name="rating"
                  data-testid={ `${index}-rating` }
                />
              </label>
            </div>
            <label htmlFor="text-area">
              <textarea
                data-testid="product-detail-evaluation"
                value={ desc }
                name="desc"
                id="text-area"
                onChange={ this.handleInput }
              />
            </label>
            <button
              type="button"
              data-testid="submit-review-btn"
              onClick={ this.handleEvaluation }
            >
              Mandar
            </button>
          </form>
        </div>
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
