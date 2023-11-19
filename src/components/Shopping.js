import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Shopping.css";

const items = [
  { id: 1, title: "Item 1", price: "$19.99", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU" },
  { id: 2, title: "Item 2", price: "$29.99", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600,892&ssl=1" },
  // ... (similar entries for the rest of the items)
];

export default function Shop() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}>
          {items.map((item) => (
            <div key={item.id} className="carousel-item">
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} className="carousel-image" />
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}