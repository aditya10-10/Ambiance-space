import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Collapsible from "./components/Navbar";
import Video from "./components/landingPage";
import Welcome from "./components/welcome.js";
import Box from "./components/businessbox.js";
import Slider from "./components/Slider";
import MultiActionAreaCard from "./components/Shopping.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <div className="App">   
      <Collapsible />
      <Video />
      <Welcome />
      <Box />
      <Slider />
      <MultiActionAreaCard />
      <Footer />
    </div>
  );
}

export default App;
