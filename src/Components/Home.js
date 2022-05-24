import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import FIlterableProductList from './FIlterableProductList';
import SearchBar from './SearchProduct';
import CartButton from './CartButton';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      productList: [],
    };

    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  async handleSearchButton(searchValue) {
    const setProducts = await getProductsFromCategoryAndQuery(
      undefined,
      searchValue,
    );
    this.setState({ productList: setProducts.results });
  }

  handleOnInputChange({ target: { name, type, checked, value } }) {
    const checkedValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: checkedValue });
  }

  render() {
    const { searchValue, productList } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <SearchBar
          onClick={ () => this.handleSearchButton(searchValue) }
          onChange={ this.handleOnInputChange }
          value={ searchValue }
        />
        {productList ? (
          <FIlterableProductList productList={ productList } />
        ) : (
          <h2>Nenhum produto foi encontrado</h2>
        )}
        <CartButton />
      </div>
    );
  }
}

export default Home;
