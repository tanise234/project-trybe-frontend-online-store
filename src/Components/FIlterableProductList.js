import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FIlterableProductList extends Component {
  renderProductList(list) {
    const { addToCart } = this.props;
    return list.map((item) => (
      <div key={ item.id } data-testid="product">
        <img src={ item.thumbnail } alt={ item.title } />
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart(item) }
        >
          Adicionar ao Carrinho

        </button>
      </div>

    ));
  }

  render() {
    const { productList } = this.props;
    return (
      <div>
        {productList.length ? (
          this.renderProductList(productList)
        ) : (
          <h2>Nenhum produto foi encontrado</h2>
        )}
      </div>
    );
  }
}

FIlterableProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.any).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default FIlterableProductList;
