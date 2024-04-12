import React, { useState } from "react";
import { ClassNames } from "@emotion/react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { src: "image1.jpg", alt: "Gambar 1" },
    { src: "image2.jpg", alt: "Gambar 2" },
    { src: "image3.jpg", alt: "Gambar 3" },
  ];

  // Fungsi untuk mengubah slide
  const handleSlide = (direction) => {
    if (direction === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "prev") {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <>
      <div className={className("carousel", "relative", "overflow-hidden")}>
        {images.map((image, index) => (
          <div
            key={index}
            className={className(
              "carousel-item",
              "absolute",
              "inset-0",
              "transform",
              "transition-transform",
              {
                "left-0": activeIndex === index ? 0 : -100 * index + "%",
                "opacity-100": activeIndex === index,
                "opacity-0": activeIndex !== index,
              }
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className={className(
          "carousel-controls",
          "absolute",
          "bottom-0",
          "flex",
          "justify-between",
          "w-full",
          "p-4"
        )}
      >
        <button
          onClick={() => handleSlide("prev")}
          className="bg-gray-500 hover:bg-gray-700 rounded-full p-2"
        >
          <span className="inline-block" aria-hidden="true">
            &larr;
          </span>
        </button>
        <button
          onClick={() => handleSlide("next")}
          className="bg-gray-500 hover:bg-gray-700 rounded-full p-2"
        >
          <span className="inline-block" aria-hidden="true">
            &rarr;
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
