import React from "react";

function Experience() {
  return (
    <div className="px-5 lg:px-16 mt-16">
      <h3 className="font-semibold text-main-black text-2xl">Experiencia</h3>
      <div className="h-1 bg-main-black w-full mt-1"></div>
      <div className="h-2 bg-main-black w-full mt-1"></div>
      <div className="h-3 bg-main-black w-full mt-1"></div>

      <div className="mt-8">
        <h4 className="font-medium text-3xl">Desarrollador Web</h4>
        <p className="font-medium text-xl">YoContigo IT</p>
        <p className="text-sm mt-2">Feb. 2022 - Mar. 2023</p>
        <p className="mt-4">Actividades destacadas</p>
        <div className=" w-[180px] h-[1px] bg-main-black"></div>

        <p className="mt-6 text-justify lg:w-[900px] ">
          Aprendizaje autodidacta para la creación sitios web de comercio
          electrónico usando Flatsome y el complemento WooCommerce para
          configurar pasarelas de pago. He trabajado cerca de los clientes tanto
          para buscar las soluciones en sus sitios como para capacitarlos una
          vez terminado los proyectos.
        </p>
        <div className="my-8 w-full h-[0.5px] bg-ligth-black "></div>
        <p className="mt-6 text-justify lg:w-[900px]">
          Líder de proyecto tanto en el desarrollo como diseño de más de 15
          sitios web que tenían como objetivo ser Landing Pages y Web Apps. Me
          dedique a capactiar clientes, creación de manuales y a la
          solución de problemas a páginas web ya existentes.
        </p>
        <div className="my-8 w-full h-[1px] bg-ligth-black "></div>
        <p className="mt-6 text-justify lg:w-[900px]">
          Desarrollo de varias PWA entre las más importantes fue la creación de
          una app e-commerce completo de mascotas. Desarrollé el proyecto usando
          HTML, CSS, JavaScript, Figma y Photoshop. Optimizamos el sitio web, ya
          que contenía más de 3000 productos.
        </p>
        <div className="my-8 w-full h-[1px] bg-ligth-black "></div>
        <p className="mt-6 text-justify lg:w-[900px]">
          Líder de proyecto en una Web App personalizada, para el consultorio de
          un grupo de doctores. El objetivo fue crear un CRM utilizando HTML,
          CSS, PHP, Javascript, Boostrap y consumiendo varios servicios de
          API's.
        </p>
        <div className="my-8 w-full h-[0.5px] bg-ligth-black "></div>
      </div>
    </div>
  );
}

export default Experience;
