import "./App.css";
import Collapsible from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/welcome.js";
import Video from "./components/landingPage";
import Box from "./components/businessbox.js";
import {v4 as uuidv4} from "uuid";
import Card from "./components/Card.js";
import Carousel from "./components/Reviews.js";
import Footer from "./components/Footer.js";

function App() {
    let cards = [
        {
            key: uuidv4(),
            content: (<Card
                review="Working with this interior designer was a delightful experience! They transformed my living space into a dream haven. Attention to detail, creativity, and a touch of traditional elegance – they have it all. Highly recommended!"
                name='@- Priya Sharma'/>)
        }, {
            key: uuidv4(),
            content: (<Card
                review="This interior designer has an innate ability to capture your vision and turn it into a reality. My space now feels like an extension of my personality, thanks to the thoughtful design choices. An artist with a keen sense of aesthetics!"
                name='@- Rajan Kapoor'/>)
        }, {
            key: uuidv4(),
            content: (<Card
                review="The attention to detail is what sets this designer apart. Every corner of my home has a story to tell. The personalized approach and dedication to creating a unique space are truly commendable. Highly recommended!"
                name='@- Aishwarya Patel'/>)
        }, {
            key: uuidv4(),
            content: (<Card
                review="I was impressed by the professionalism and creativity of this interior designer. They not only met but exceeded my expectations. The designs are not just aesthetically pleasing but also functional. Great job!"
                name='@- Arjun Khanna'/>)
        }, {
            key: uuidv4(),
            content: (<Card
                review="An absolute pleasure to work with! This designer understood my vision and brought it to life with finesse. The use of colors and textures was exceptional. My home feels like a work of art. Thank you!"
                name='@- Nandini Gupta'/>)
        }, {
            key: uuidv4(),
            content: (<Card
                review="Incredible talent and a keen eye for design! This interior designer seamlessly blended modern and traditional elements, creating a space that truly reflects my personality. I couldn't be happier with the results."
                name='@- Sneha Joshi'/>)
        }
    ];
    return (
        <div className="App">
            <Collapsible/>
            <Video/>
            <Welcome/>
            <Box/>

            <div class="testimonial-section">
                <h1>Client Testimonials</h1>
                <p>Explore the feedback from our satisfied clients and be inspired by their
                    interior design journeys.</p>
                    <Carousel className="carousel"
                cards={cards}
                height="500px"
                width="30%"
                margin="0 auto"
                offset={2}
                showArrows={false}/>
            </div>

             <Footer/>

        </div>
    );
}

export default App;
