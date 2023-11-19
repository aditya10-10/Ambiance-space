// import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css"; // Make sure the path is correct
import React, { useEffect, useState } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 350 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
// Update the sliderImageUrl array
const sliderItems = [
  {
    review:
      "Working with this interior designer was a delightful experience! They transformed my living space into a dream haven. Attention to detail, creativity, and a touch of traditional elegance – they have it all. Highly recommended!",
    name: "@- Priya Sharma",
  },
  {
    review:
      "This interior designer has an innate ability to capture your vision and turn it into a reality. My space now feels like an extension of my personality, thanks to the thoughtful design choices. An artist with a keen sense of aesthetics!",
    name: "@- Rajan Kapoor",
  },
  {
    review:
      "The attention to detail is what sets this designer apart. Every corner of my home has a story to tell. The personalized approach and dedication to creating a unique space are truly commendable. Highly recommended!",
    name: "@- Aishwarya Patel",
  },
  {
    review:
      "I was impressed by the professionalism and creativity of this interior designer. They not only met but exceeded my expectations. The designs are not just aesthetically pleasing but also functional. Great job!",
    name: "@- Arjun Khanna",
  },
  {
    review:
      "An absolute pleasure to work with! This designer understood my vision and brought it to life with finesse. The use of colors and textures was exceptional. My home feels like a work of art. Thank you!",
    name: "@- Nandini Gupta",
  },
  {
    review:
      "Incredible talent and a keen eye for design! This interior designer seamlessly blended modern and traditional elements, creating a space that truly reflects my personality. I couldn't be happier with the results.",
    name: "@- Sneha Joshi",
  }
];

// Update the Slider component
const Slider = () => {
  const [carouselReady, setCarouselReady] = useState(false);

  useEffect(() => {
    setCarouselReady(true);
  }, []);
  const goldenStarStyle = {
    color: "#FFD700", // Set color to golden
    margin: "0 2px", // Adjust margin for spacing between stars
  };

  return (
    <div className="parent">
      <div class="testimonial-section">
        <h1>Client Testimonials</h1>
        <p>
          Explore the feedback from our satisfied clients and be inspired by
          their interior design journeys.
        </p>
      </div>
      {carouselReady && (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1000}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          
          {sliderItems.map((item, index) => (
            <div className="slider" key={index}>
              <div className="star-rating">
                <span className="fa fa-star" style={goldenStarStyle}></span>
                <span className="fa fa-star" style={goldenStarStyle}></span>
                <span className="fa fa-star" style={goldenStarStyle}></span>
                <span className="fa fa-star" style={goldenStarStyle}></span>
                <span className="fa fa-star" style={goldenStarStyle}></span>
              </div>
              <p>{item.review}</p>
              <h4>{item.name}</h4>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Slider;
