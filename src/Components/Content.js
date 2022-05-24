import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './Home';

class Content extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ Home } />
      </Router>
    );
  }
}
export default Content;
