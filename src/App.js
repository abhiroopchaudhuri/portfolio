import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import FrontendProjects from "./FrontendProjects";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {

  const basename = window.location.pathname.split('/')[1] || '/'; // Default to '/' if not found

  return (
    <Router basename="/portfolio">
      <div className="App bg-black flex flex-col min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path={`${basename}/frontend-projects`} element={<FrontendProjects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
