import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import FrontendProjects from "./FrontendProjects";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App bg-black flex flex-col min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/frontend-projects" element={<FrontendProjects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
