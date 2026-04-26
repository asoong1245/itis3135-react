import React, { useState, useEffect, useRef } from "react";
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
import { useTitle } from './titleFunc'

function Slideshow() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  useEffect(() => {
    if (isPlaying && images.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < images.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            return prevIndex;
          }
        });
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, images]);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const firstSlide = () => {
    setCurrentIndex(0);
  };

  const lastSlide = () => {
    setCurrentIndex(images.length - 1);
  };

  const startSlideshow = () => {
    setIsPlaying(true);
  };

  const stopSlideshow = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  return (
    <>
    <Header></Header>

    <div className="slideshow-container">
  <h1>Cat Slideshow</h1>

  <p>Status: {isPlaying ? "Playing" : "Stopped"}</p>

  {images.length > 0 && (
    <img
      src={images[currentIndex].url}
      alt="Slideshow"
      style={{ width: "400px", height: "400px", objectFit: "cover" }}
    />
  )}

  <div className="controls">
    <button onClick={firstSlide}>First</button>
    <button onClick={prevSlide}>Previous</button>
    <button onClick={nextSlide}>Next</button>
    <button onClick={lastSlide}>End</button>
    <button onClick={startSlideshow}>Play</button>
    <button onClick={stopSlideshow}>Stop</button>
  </div>
</div>
      
      <Footer></Footer>
    </>
    );
}

export default Slideshow;