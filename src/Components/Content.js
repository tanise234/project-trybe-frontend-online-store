import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

class Content extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/Meu-carrinho" component={ Cart } />
      </Router>
    );
  }
}
export default Content;
