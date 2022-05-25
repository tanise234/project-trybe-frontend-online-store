import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FIlterableProductList extends Component {
  renderProductList(list) {
    return list.map(({ id, thumbnail, title, price }) => (
      <div data-testid="product" key={ id }>
        <Link
          to={ { pathname: `/ProductDetails/${id}`, state: { thumbnail, title, price } } }
          data-testid="product-detail-link"

        >
          <img src={ thumbnail } alt={ title } />
          <h3>{title}</h3>
          <p>{price}</p>
        </Link>
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
};

export default FIlterableProductList;
