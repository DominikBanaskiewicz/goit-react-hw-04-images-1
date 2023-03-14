import PropTypes from 'prop-types';
import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryitem = ({ id, image, onImageClick }) => {
  return (
    <li key={id} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem__image}
        src={image.webformatURL}
        alt=""
        id={id}
        onClick={onImageClick}
      />
    </li>
  );
};
ImageGalleryitem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
