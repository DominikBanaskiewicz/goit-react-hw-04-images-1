import PropTypes from 'prop-types';
import React from 'react';
import css from '../Modal/Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ largeImageUrl, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', keyPress);

    return () => {
      window.removeEventListener('keydown', keyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyPress = evt => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageUrl} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
};
