import React from 'react';
import CartButton from './CartButton';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h1>
        <CartButton />
      </div>
    );
  }
}

export default Home;
