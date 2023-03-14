import PropTypes from 'prop-types';
import React from 'react';
import css from '../Button/Button.module.css';

export const Button = ({ onClickLoadMore }) => {
  return (
    <button type="submit" className={css.Button} onClick={onClickLoadMore}>
      <span className="button-label">Load images</span>
    </button>
  );
};
Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
