import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FIlterableProductList extends Component {
  renderProductList(list) {
    return list.map((item) => (
      <div key={ item.id } data-testid="product">
        <img src={ item.thumbnail } alt={ item.title } />
        <h3>{item.title}</h3>
        <p>{item.price}</p>
      </div>

    ));
  }

  render() {
    const { productList } = this.props;
    return (
      <div>
        {this.renderProductList(productList)}
      </div>
    );
  }
}

FIlterableProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default FIlterableProductList;
