import Arrow from "../images/arrow-down.svg";

function Header() {
  return (
    <div id="header" className="mt-36 px-5 lg:px-16">
      <h1 className="font-semibold text-8xl mt-10 mb-4 text-main-black lg:text-9xl">
        Soy Ricardo
      </h1>
      <p className="text-2xl text-main-black lg:text-4xl lg:w-[1000px] lg:mb-7">
        un desarrollador enfocado en la creación y diseño de aplicaciones web y
        móviles{" "}
      </p>
      <div className="w-[full] h-[6px] bg-main-black mt-2 "></div>
      <div className="w-[full] h-[12px] bg-main-black mt-2 "></div>
      <div className="w-[full] h-[24px] bg-main-black mt-2 "></div>
      <div className="w-[full] h-[52px] bg-main-black mt-2 "></div>
      <div className="w-[full] h-[140px] bg-main-black mt-2 flex justify-between items-center px-6 ">
        <p className="text-main-white lg:text-2xl">
          Ideas simples con grandes resultados
        </p>
        <img src={Arrow} className="w-10 lg:w-14" />
      </div>

      <h2 id="sobre-mi" className="w-[300px] text-3xl mt-12 mb-6 lg:w-[900px] lg:text-5xl ">
        Constantemente estoy capacitándome con cursos y proyectos que realizo
        por mi cuenta
      </h2>
      <a
        className="py-3 px-10 rounded-full border border-main-black "
        href="/src/assets/documents/CV_Ricardo_González_Flores.pdf"
      >
        Descargar mi CV
      </a>
    </div>
  );
}

export default Header;
