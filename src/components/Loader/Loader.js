import React from 'react';
import css from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.lds__ripple}>
      <div></div>
      <div></div>
    </div>
  );
};
