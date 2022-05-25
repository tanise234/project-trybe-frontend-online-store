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
      radioValue: '',
      cartList: [],
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

  handleCartClick({ target: { parentNode } }) {
    const { cartList } = this.state;
    this.setState({ cartList: [...cartList, {
      name: parentNode.children[1].innerText,
      src: parentNode.children[0].src,
      price: parentNode.children[2].innerText,
    }] });
    return cartList;
  }

  render() {
    const { searchValue, productList, isFirstLoading, radioValue } = this.state;
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
          <FIlterableProductList
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
