import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Certificates from "../components/Certificates"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="relative">
      <Header />
      <Projects />
      <Experience />
      <div className="grid lg:grid-cols-2 overflow-x-hidden">
        <Education />
        <Certificates />
      </div>
      <Skills />
    </div>
  );
}

export default Home;
