import React from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { fetchGalleryimages } from './Api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { useState, useEffect, useRef } from 'react';

export const App = () => {
  const divRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [isLoadMoreButtonVisible, setIsLoadMoreButtonVisible] = useState(false);

  const getImages = async (searchQuery, pageNumber, isFirstSearch = true) => {
    setIsLoading(true);
    try {
      const downImages = await fetchGalleryimages(searchQuery, pageNumber);
      if (downImages.length === 12) setIsLoadMoreButtonVisible(true);
      else setIsLoadMoreButtonVisible(false);
      if (isFirstSearch) {
        setImages(downImages);
      } else {
        setImages(images.concat(downImages));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [images]);

  useEffect(() => {
    scrollToBottom();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const downImages = await fetchGalleryimages('', pageNumber);
        if (downImages.length === 12) setIsLoadMoreButtonVisible(true);
        else setIsLoadMoreButtonVisible(false);
        setImages(downImages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setPageNumber(pageNumber + 1);
      }
    };
    fetchData();
  }, [pageNumber]);

  const onSubmit = async search => {
    setSearchQuery(search);
    setImages([]);
    setPageNumber(1);
    setIsModalOpen(false);
    setLargeImageURL(null);

    await getImages(search);
  };

  const onClickLoadMore = () => {
    getImages(searchQuery, pageNumber + 1, false);
  };

  const getLargeimageUrl = (id, images) => {
    return images.find(elem => elem.id === Number(id)).largeImageURL;
  };

  const onImageClick = imageId => {
    const lagerImageUrl = getLargeimageUrl(imageId, images);
    setIsModalOpen(true);
    setLargeImageURL(lagerImageUrl);
  };

  const scrollToBottom = () => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Searchbar handleSubmit={onSubmit} />
      <ImageGallery images={images} onImageClick={onImageClick} />
      {isLoading && <Loader />}
      <div ref={divRef} />
      {isModalOpen && (
        <Modal largeImageUrl={largeImageURL} onClose={closeModal}></Modal>
      )}
      {isLoadMoreButtonVisible && <Button onClickLoadMore={onClickLoadMore} />}
    </div>
  );
};
