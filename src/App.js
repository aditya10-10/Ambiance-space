import "./App.css";
import Collapsible from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/welcome.js";
import Video from "./components/landingPage";
import Box from "./components/businessbox";

function App() {
    return (
        <div className="App">
            <Collapsible/>
            <Video/>
            <Welcome/>
            <Box/>
        </div>
    );
}

export default App;
