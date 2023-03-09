import React from "react";

function Certificates() {
  return (
    <div className="px-5 lg:px-16">
      <div className="flex justify-between items-center">
      <h3 className="font-semibold text-main-black text-2xl">
        Certificaciones
      </h3>
      <a className="underline text-right" target={"_blank"} href="https://www.linkedin.com/in/ricardogf396/">Ver todas mis certificaciones</a>
      </div>
      <div className="h-1 bg-main-black w-full mt-1"></div>
      <div className="h-2 bg-main-black w-full mt-1"></div>
      <div className="h-3 bg-main-black w-full mt-1"></div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <h4 className="mt-8 font-semibold">
            Front End Development Libraries (300 HRS)
          </h4>
          <p className="text-sm mt-2 lg:w-[450px] ">Free Code Camp Nov. 2022</p>
          <div className="my-8 w-full h-[0.5px] bg-ligth-black "></div>
          <h4 className="mt-8 font-semibold">Front End Developer</h4>
          <p className="text-sm mt-2 lg:w-[450px] ">
            Fundación Carlos Slim Sept. 2021
          </p>
          <div className="my-8 w-full h-[0.5px] bg-ligth-black "></div>
          <h4 className="mt-8 font-semibold">Intoduction to Web Development 1 and 2</h4>
          <p className="text-sm mt-2 lg:w-[450px] ">
          Google Actívate
Ago. 2021
          </p>
          <div className="my-8 w-full h-[0.5px] bg-ligth-black "></div>
        </div>
        
        <div>
        <h4 className="mt-8 font-semibold">
        JavaScript Algorithms and Data Structures
          </h4>
          <p className="text-sm mt-2 lg:w-[450px] ">Free Code Camp
Jun. 2022</p>
          <div className="my-8 w-full h-[0.5px] bg-ligth-black "></div>
          <h4 className="mt-8 font-semibold">Responsive Web Desing (300 hrs)</h4>
          <p className="text-sm mt-2 lg:w-[450px] ">
          Free Code Camp
Ago. 2022
          </p>
          <div className="my-8 w-full h-[0.5px] bg-ligth-black "></div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
