import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  state = {
    list: [],
  }

  async componentDidMount() {
    const setList = await getCategories();
    this.setState({ list: setList });
  }

  renderCategories(list, onClick) {
    return list.map((item) => (
      <div key={ item.id }>
        <input
          type="radio"
          value={ item.id }
          name="category"
          data-testid="category"
          onClick={ onClick }
        />
        <li data-testid="category">{item.name}</li>
      </div>
    ));
  }

  render() {
    const { list } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <h1>cat</h1>
        <ul>
          {
            this.renderCategories(list, onClick)
          }
        </ul>
      </div>
    );
  }
}

export default Categories;

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};
