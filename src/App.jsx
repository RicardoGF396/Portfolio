import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./assets/components/Footer";

import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import ProjectDetails from "./assets/components/ProjectDetails";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";

function App() {
  return (
    <div className="relative">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
