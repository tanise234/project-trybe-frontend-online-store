import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onClick, onChange, value } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="searchValue"
          value={ value }
          onChange={ onChange }
        />
        <button data-testid="query-button" type="button" onClick={ onClick }>
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
