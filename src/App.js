import "./App.css";
import Collapsible from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Test from "./components/test";
import Video from "./components/landingPage";


function App() {
  return (
    <div className="App">
      <Collapsible />
      <Video />
      <Test />
    </div>
  );
}

export default App;
