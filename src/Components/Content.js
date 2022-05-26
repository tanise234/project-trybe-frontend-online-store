import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ProductDetails from './ProductDetails';

class Content extends React.Component {
  render() {
    return (
      <Router>

        <Route exact path="/" component={ Home } />
        <Route path="/Meu-carrinho" component={ Cart } />
        <Route path="/ProductDetails/:id" component={ ProductDetails } />

      </Router>
    );
  }
}
export default Content;
