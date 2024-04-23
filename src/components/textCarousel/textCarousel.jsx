import './textCarouselStyles.scss'

import { useState, useEffect } from 'react';

const TextCarousel = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % texts.length);
    }, 2800); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [texts.length]);

  return (
    <div className="carousel-container">
      <div className="text">{texts[currentIndex]}</div>
    </div>
  );
}

export default TextCarousel;