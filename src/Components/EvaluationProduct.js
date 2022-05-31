import React, { Component } from 'react';
import PropTypes from 'prop-types';

const valuesList = [1, 1, 1, 1, 1];

class EvaluationProduct extends Component {
  render() {
    const {
      onClick,
      onChange,
      email,
      rating,
      desc,
    } = this.props;
    return (
      <div>
        <h4>Avaliação</h4>
        <form>
          <label htmlFor="input-email">
            <input
              type="email"
              data-testid="product-detail-email"
              value={ email }
              name="email"
              id="input-email"
              onChange={ onChange }
            />
          </label>
          <div>
            <label htmlFor="input-radio">

              {
                valuesList.map((elem, index) => (
                  <input
                    key={ index }
                    type="radio"
                    id="input-radio"
                    value={ elem + index }
                    name="rating"
                    checked={ parseInt(rating, 10) === elem + index }
                    data-testid={ `${index + 1}-rating` }
                    onChange={ onChange }
                  />
                ))
              }
            </label>
          </div>
          <label htmlFor="text-area">
            <textarea
              data-testid="product-detail-evaluation"
              value={ desc }
              name="desc"
              id="text-area"
              onChange={ onChange }
            />
          </label>
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ onClick }
          >
            Mandar
          </button>
        </form>
      </div>
    );
  }
}

EvaluationProduct.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};

export default EvaluationProduct;
