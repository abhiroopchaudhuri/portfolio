import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import FrontendProjects from "./FrontendProjects";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  
  return (
    <Router>
      <div className="App bg-black relative flex flex-col min-h-screen z-0">

        <div className="nav-container w-full flex flex-row justify-center items-center fixed z-50">
        <Navbar />
        </div>

        

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
