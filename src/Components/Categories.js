import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  state = {
    list: [],
  }

  async componentDidMount() {
    const setList = await getCategories();
    this.setState({ list: setList });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <h1>cat</h1>
        <ul>
          {
            list.map((item) => (
              <li key={ item.id } data-testid="category">{item.name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Categories;
