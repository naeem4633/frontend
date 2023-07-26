import React, { useRef } from 'react';

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    const scrollAmount = carouselRef.current.offsetWidth / images.length * 2.4;
    carouselRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    const scrollAmount = carouselRef.current.offsetWidth / images.length * 2.4;
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mx-auto w-[70vw] relative items-center">
      <button onClick={scrollLeft} className="bg-transparent ml-4 absolute top-1/2">
        <img src='../static/images/arrow-left.png' alt="Previous" className="w-8 h-8 object-contain" />
      </button>
      <div
        className="w-[70vw] flex overflow-hidden border border-red-800" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 h-52 w-1/5 p-2 border border-black" style={{ minWidth: 'calc(100% / 5)' }}>
            {/* Place your content here */}
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="absolute top-1/2 mr-4 right-0 bg-transparent">
        <img src='../static/images/arrow-right.png' alt="Next" className="w-8 h-8 object-contain" />
      </button>
    </div>
  );
};

export default Carousel;
