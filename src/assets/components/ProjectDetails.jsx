import React, { useEffect } from "react";
import ProjectJSON from "../documents/projects.js";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Buscar el proyecto correspondiente al ID en tu fuente de datos
  const {
    name,
    type,
    technologies,
    date,
    description,
    repository,
    site,
    images,
    colors,
    challenges,
  } = ProjectJSON.find((p) => p.id === id);

  return (
    <div className="mt-24 px-4 lg:px-20">
      <div className="lg:flex lg:justify-between lg:items-end">
        <div>
          <p className="font-medium text-[#999999] lg:text-2xl"> {type} </p>
          <h1 className="font-medium text-main-black text-4xl lg:text-6xl mb-6">
            {" "}
            {name}{" "}
          </h1>
        </div>
        <a
          target={"_blank"}
          href={site}
          className="px-10 py-3 bg-main-black rounded-full text-main-white"
        >
          Ver sitio
        </a>
      </div>
      <div className="h-[1px] w-full bg-[#999999] mt-8 mb-8 lg:mt-4"></div>

      <div className="mt-12 lg:flex lg:justify-between">
        <div>
          <div>
            <h3 className="text-[#999999] font-medium text-2xl ">
              Tecnologías
            </h3>
            <p> {technologies} </p>
          </div>
          <div className="mt-12">
            <h3 className="text-[#999999] font-medium text-2xl ">Fecha</h3>
            <p> {date} </p>
          </div>
        </div>
        <div className="mt-12 lg:w-[800px] lg:mt-0">
          <h3 className="text-[#999999] font-medium text-2xl ">Descripción</h3>
          <p className="mb-8"> {description} </p>
          <a
            target={"_blank"}
            href={repository}
            className="px-10 py-3 text-main-black border border-main-black rounded-full"
          >
            Repositorio
          </a>
        </div>
      </div>

      {/* Images */}
      <div className="mt-12">
        <div className="lg:flex lg:justify-center">
          <img className="rounded-xl lg:w-[95%]" src={images[0]} alt="img" />
        </div>
        <div className="mt-8 lg:flex lg:justify-between">
          <div className="lg:w-[50%]">
            <h3 className="text-[#999999] font-medium text-2xl">
              Desafíos del proyecto
            </h3>
            <p className="mb-8 mt-4"> {challenges} </p>
          </div>
          <img className="rounded-xl lg:w-[45%]" src={images[1]} alt="img" />
        </div>
        <div className="flex flex-col gap-4">
          <img className="rounded-xl mt-8" src={images[2]} alt="img" />
        </div>
        <img className="rounded-xl mt-8" src={images[3]} alt="img" />
        <img className="rounded-xl mt-8" src={images[4]} alt="img" />
      </div>

      {/* Color Pallete */}
      <div>
        <h1 className="text-4xl mt-8 text-main-black">Paleta de Colores</h1>
        <div className="h-[1px] w-full bg-[#999999] mt-4"></div>
        <div className="flex flex-col mt-8 lg:flex-row lg:items-center lg:gap-x-6 lg:justify-center">
          <div
            style={{ backgroundColor: colors[0] }}
            className="w-full h-[164px] rounded-xl lg:h-[600px] lg:w-[380px] py-4 px-8 flex flex-col justify-between items-end"
          >
            <p className="font-semibold text-white"> {colors[0]} </p>
            <p className="text-5xl font-semibold text-white "> Aa </p>
          </div>
          <div
            style={{ backgroundColor: colors[1] }}
            className="w-full h-[164px] mt-4 lg:mt-0 lg:h-[600px] lg:w-[380px] rounded-xl py-4 px-8 flex flex-col justify-between items-end"
          >
            <p className="font-semibold text-white"> {colors[1]} </p>
            <p className="text-5xl font-semibold text-white "> Aa </p>
          </div>
          <div
            style={{ backgroundColor: colors[2] }}
            className="w-full h-[164px] mt-4 lg:mt-0 lg:h-[600px] lg:w-[380px] rounded-xl py-4 px-8 flex flex-col justify-between items-end"
          >
            <p className="font-semibold text-white"> {colors[2]} </p>
            <p className="text-5xl font-semibold text-white "> Aa </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
