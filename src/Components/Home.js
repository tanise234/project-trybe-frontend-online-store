import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import FilterableProductList from './FilterableProductList';
import SearchBar from './SearchProduct';
import CartButton from './CartButton';
import Categories from './Categories';
import { addItem } from '../services/saveProduct';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirstLoading: true,
      searchValue: '',
      productList: [],
      radioValue: '',
    };

    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.handleRadioInput = this.handleRadioInput.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
  }

  async handleSearchButton(searchValue, radio = undefined) {
    const { radioValue } = this.state;
    const setRadio = radio || radioValue;
    const setProducts = await getProductsFromCategoryAndQuery(
      setRadio,
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

  async handleRadioInput({ target: { value } }, searchValue) {
    const setProducts = await getProductsFromCategoryAndQuery(
      value,
      searchValue,
    );
    if (!searchValue) {
      this.setState({ productList: setProducts.results, isFirstLoading: false });
    } else {
      this.setState(
        { radioValue: value }, await this.handleSearchButton(searchValue, value),
      );
    }
  }

  handleCartClick(cartItem) {
    addItem(cartItem);
  }

  render() {
    const { searchValue, productList, isFirstLoading, radioValue } = this.state;
    // addItem(productList[0]);
    // addItem(productList[0]);
    // addItem(productList[1]);
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
          <FilterableProductList
            productList={ productList }
            addToCart={ this.handleCartClick }
          />
        )}
        <CartButton />
        <nav>
          <Categories
            onClick={
              (e) => this.handleRadioInput(e, searchValue)
            }
            value={ radioValue }
          />
        </nav>
      </div>
    );
  }
}

export default Home;
