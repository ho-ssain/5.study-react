/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./style.css";
import loadImg from "../../assets/loading.gif";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 10, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSLide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrevious = () => {
    setCurrentSLide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSLide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <img className="loader" src={loadImg} alt="loading......." />;
  }

  if (error) {
    return <h3>Error Occurred-: {error}</h3>;
  }

  return (
    <div className="container">
      <h2 className="image-slider-heading">Image Slider</h2>

      <div className="image-slider-container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={() => handlePrevious()}
        />
        {images && images.length
          ? images.map((img, index) => (
              <img
                key={img.id}
                src={img.download_url}
                alt={img.download_url}
                className={
                  currentSlide === index
                    ? "current_image"
                    : "current_image hide_image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={() => handleNext()}
        />

        <span className="circle-indicator">
          {images && images.length
            ? images.map(({ id }, index) => (
                <button
                  key={id}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSLide(index)}
                ></button>
              ))
            : "No Images Found"}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
