import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

class Content extends React.Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={ (props) => <Home { ...props } /> }
        />
        <Route
          path="/Meu-carrinho"
          render={ (props) => <Cart { ...props } /> }
        />
      </Router>
    );
  }
}
export default Content;
