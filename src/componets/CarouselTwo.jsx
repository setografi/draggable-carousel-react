import React, { useRef, useState } from "react";
import { useGesture } from "react-use-gesture";

const cardWidth = 300; // Lebar setiap kartu

function CarouselTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Fungsi untuk menggeser slide ke kanan
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  // Fungsi untuk menggeser slide ke kiri
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  // Fungsi untuk menangani gerakan drag
  const bind = useGesture({
    onDrag: ({ down, movement: [mx] }) => {
      // Hanya bergerak jika tidak ada klik
      if (!down) return;

      // Menggeser slide berdasarkan gerakan mouse
      containerRef.current.style.transform = `translateX(calc(-${
        currentIndex * cardWidth
      }px + ${mx}px))`;
    },
    onWheel: (event) => {
      // Menggeser slide berdasarkan gerakan scroll mouse
      if (event.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    },
  });
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          {...bind()}
        >
          <div className="w-72 h-72 bg-blue-300 mx-1"></div>
          <div className="w-72 h-72 bg-green-300 mx-1"></div>
          <div className="w-72 h-72 bg-yellow-300 mx-1"></div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default CarouselTwo;
