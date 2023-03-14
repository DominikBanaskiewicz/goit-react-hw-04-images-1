import PropTypes from 'prop-types';
import React from 'react';
import css from '../Searchbar/Searchbar.module.css';

export const Searchbar = ({ handleSubmit }) => {
  const handleSubmit2 = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.searchQuery.value;
    console.log(searchQuery);
    this.props.handleSubmit(searchQuery);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit2}>
        <button type="submit" className={css.SearchForm__button}>
          <span className={css.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={css.SearchForm__input}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
