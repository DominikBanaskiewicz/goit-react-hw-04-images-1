import { ImageGalleryitem } from 'components/ImageGalleryItem/ImageGalleryitem';
import PropTypes from 'prop-types';
import React from 'react';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => {
  const oonImageClick = evt => {
    evt.preventDefault();
    onImageClick(evt.target.id);
  };

  if (typeof images !== 'undefined') {
    return (
      <ul className={css.ImageGallery}>
        {images.map(elem => (
          <ImageGalleryitem
            key={elem.id}
            id={elem.id}
            image={elem}
            onImageClick={oonImageClick}
          />
        ))}
      </ul>
    );
  }
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
