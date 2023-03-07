import Navbar from "../src/assets/components/Navbar";
import AllProjects from "./assets/components/AllProjects";
import Certificates from "./assets/components/Certificates";
import Education from "./assets/components/Education";
import Experience from "./assets/components/Experience";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";

function App() {
  return (
    <div className="relative">
      
      <Navbar />
      <Header />
      <Projects />
      <Experience />
      <div className="grid lg:grid-cols-2 overflow-x-hidden">
        <Education />
        <Certificates />
      </div>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
