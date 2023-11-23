import React from "react";
import Carousel from "react-multi-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/2.png";
import image2 from "../assets/3.png";
import image3 from "../assets/5.png";
import image4 from "../assets/6.png";
import image5 from "../assets/7.png";
import image6 from "../assets/8.png";
import image7 from "../assets/Sofa.png";
import image8 from "../assets/Wardrobe.png";
import "./Shopping.css";

import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";

export default function MultiActionAreaCard() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 320 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const cardData = [
    {
      title: "Wooden Table",
      description:
        "Crafted from solid wood, our versatile table offers ample storage and timeless style.",
      image: image1,
      price: "₹ 45,499",
    },
    {
      title: "Wooden Dining table",
      description:
        "Elevate your dining experience with our stylish and durable table.",
      image: image2,
      price: "₹ 19,999",
    },
    {
      title: "Luxury Bed",
      description:
        "Experience unparalleled sleep on this opulent, premium bed.",
      image: image3,
      price: "₹ 79,999",
    },
    {
      title: "Dinning table",
      description:
        "Experience the perfect blend of style and function with our enduring dining table.",
      image: image4,
      price: "₹ 25,499",
    },
    {
      title: "Wooden and modern dining table",
      description:
        "Embrace a contemporary yet timeless dining experience with our sleek wooden set.",
      image: image5,
      price: "₹ 9,999",
    },
    {
      title: "Wooden Chair",
      description:
        "Enhance your décor with the warmth and beauty of our solid wooden chair.",
      image: image6,
      price: "₹ 4,599",
    },
    {
      title: "Sofa",
      description:
        "Create a cozy and stylish haven with our exquisitely crafted sofa.",
      image: image7,
      price: "₹ 13,999",
    },
    {
      title: "Wardrobe",
      description:
        "Keep your clothes impeccably organized in our sleek and versatile wardrobe.",
      image: image8,
      price: "₹ 24,949",
    },
    // Add more card data as needed
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h1 className="shop">SHOP FURNITURE</h1>
      {/* <p>
        {" "}
        <span>View All</span>{" "}
      </p> */}
      <Carousel responsive={responsive} containerClass="carousel-container">
        {cardData.map((data, index) => (
          <Card key={index} style={{ margin: "10px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={data.image}
                alt={data.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {data.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                color="warning"
                endIcon={<LocalMallSharpIcon />}
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
