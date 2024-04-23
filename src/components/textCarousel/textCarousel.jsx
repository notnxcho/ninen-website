import './textCarouselStyles.scss'

import { useState, useEffect, useRef } from 'react';

const TextCarousel = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [outgoingIndex, setOutgoingIndex] = useState(null)
  const [width, setWidth] = useState(0)
  const textRefs = useRef(new Array(texts.length).fill(null))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOutgoingIndex(currentIndex)
      setCurrentIndex(currentIndex => (currentIndex + 1) % texts.length)
    }, 2400)

    return () => clearInterval(intervalId)
  }, [texts.length, currentIndex])

  useEffect(() => {
    if (textRefs.current[currentIndex]) {
      setWidth(textRefs.current[currentIndex].offsetWidth)
    }
  }, [currentIndex])

  return (
    <div className="carousel-container" style={{width: width}}>
      {texts.map((text, index) => (
        <div
          key={index}
          ref={el => textRefs.current[index] = el}
          className={`text ${index === currentIndex ? 'slide-in' : ''} ${index === outgoingIndex ? 'slide-out' : ''}`}
        >
          {text}
        </div>
      ))}
    </div>
  )
}

export default TextCarousel;