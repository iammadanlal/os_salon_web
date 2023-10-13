import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={2000} 
        showThumbs={false} 
      >
        <div>
          <img src="/Images/image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="/Images/image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="/Images/image3.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="/Images/image4.jpg" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
