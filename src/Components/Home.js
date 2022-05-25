import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import FIlterableProductList from './FIlterableProductList';
import SearchBar from './SearchProduct';
import CartButton from './CartButton';
import Categories from './Categories';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirstLoading: true,
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
    if (setProducts) {
      this.setState({ productList: setProducts.results, isFirstLoading: false });
    }
  }

  handleOnInputChange({ target: { name, type, checked, value } }) {
    const checkedValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: checkedValue });
  }

  render() {
    const { searchValue, productList, isFirstLoading } = this.state;
    return (
      <div>

        <SearchBar
          onClick={ () => this.handleSearchButton(searchValue) }
          onChange={ this.handleOnInputChange }
          value={ searchValue }
        />
        {isFirstLoading ? (
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        ) : (
          <FIlterableProductList productList={ productList } />
        )}
        <CartButton />
        <nav>
          <Categories />
        </nav>
      </div>
    );
  }
}

export default Home;
