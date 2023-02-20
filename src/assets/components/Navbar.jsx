import { useState } from "react";
import Menu from "../images/menu.svg";
import Close from "../images/close.svg";
import Call from "../images/call.svg";
import gsap from "gsap";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const animationNavOpen = () => {
    setNavOpen(!navOpen);

    const open = gsap.to(".nav-link", {
      y: -45,
      duration: 0.3,
      stagger: 0.2,
    });

    open.delay(0.2);
  };

  const animationNavClose = () => {
    setNavOpen(!navOpen);

    gsap.to(".nav-link", {
      y: 45,
      duration: 0.3,
      stagger: 0.2,
    });
  };

  return (
    <div>
      {/*  Nav Overlay */}
        <div
          className={`nav-transition fixed w-full h-screen bg-main-black flex items-center justify-center left-0 overflow-hidden ${
            navOpen ? "top-0" : "-top-[110%] "
          } `}
        >
          <ul className="flex flex-col gap-y-6">
            <li className="nav-item font-light text-6xl text-main-white">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item font-light text-6xl text-main-white">
              <a className="nav-link" href="#">
                Projectos
              </a>
            </li>
            <li className="nav-item font-light text-6xl text-main-white">
              <a className="nav-link" href="#">
                Sobre Mí
              </a>
            </li>
            <li className="nav-item font-light text-6xl text-main-white">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
          <div className="absolute top-5 right-5 flex justify-between w-[90%] ">
          <a
          href="tel:4774122683"
          className="flex items-center"
        >
          <img className="filter-white w-5 mr-4" src={Call} alt="call" />
          <p className="text-main-white"> (477) 412 2683 </p>
        </a>
          <img
            className="cursor-pointer z-10 "
            onClick={() => animationNavClose()}
            src={Close}
          />
          
          </div>
        </div>

        
        


      <div className="flex justify-between px-5 py-5 items-center">
        <div className="logo">
          <h5 className="font-bold text-xl">Ricardo González Flores</h5>
        </div>
        <div>
          <img
            className="cursor-pointer z-10"
            onClick={() => animationNavOpen()}
            src={Menu}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
