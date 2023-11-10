import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoBg from "../assets/vdo.mp4";
import "./landingPage.css";

function Video() {
  return (
    <div className="uk-position-cover video-container overlay">
      <video autoPlay loop muted>
        <source src={VideoBg} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="animate__animated animate__zoomIn">
        Ambiance Space
        </h1>
        <h4>Elevate Your Space with Exceptional Interior Design Services</h4>
      </div>
    </div>
  );
}

export default Video;
