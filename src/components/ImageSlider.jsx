import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For slider arrows

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images);
  console.log("currentIndex ", currentIndex);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=5&size=400"
        );
        const result = await response.json();
        setImages(result);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // Move to next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="border-b border-neutral-500 pb-4">
      <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg ">
        {/* Slider */}
        <div className="flex justify-center items-center">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className={`w-full h-96 object-cover transition-opacity duration-700 ease-in-out ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{ display: currentIndex === index ? "block" : "none" }}
              >
                <img
                  src={image.download_url}
                  alt={image.author}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading images...</p>
          )}
        </div>

        <button
          className="absolute top-1/2 left-0 p-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full"
          onClick={prevSlide}
        >
          <FaArrowLeft size={20} />
        </button>

        <button
          className="absolute top-1/2 right-0 p-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full"
          onClick={nextSlide}
        >
          <FaArrowRight size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
