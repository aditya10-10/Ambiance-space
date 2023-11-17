// Card.js

import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ review, name }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  const goldenStarStyle = {
    color: "#FFD700", // Set color to golden
    margin: "0 2px", // Adjust margin for spacing between stars
  };

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className={Styles["star-rating"]}>
        <span className="fa fa-star" style={goldenStarStyle}></span>
        <span className="fa fa-star" style={goldenStarStyle}></span>
        <span className="fa fa-star" style={goldenStarStyle}></span>
        <span className="fa fa-star" style={goldenStarStyle}></span>
        <span className="fa fa-star" style={goldenStarStyle}></span>
      </div>
      <p>{review}</p>
      <h4>{name}</h4>
    </animated.div>
  );
}

export default Card;
