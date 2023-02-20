import React from "react";

function Skills() {
  return (
    <div className="px-5 lg:px-16">
      <h3 className="font-semibold text-main-black text-2xl">Habilidades</h3>
      <div className="h-1 bg-main-black w-full mt-1"></div>
      <div className="h-2 bg-main-black w-full mt-1"></div>
      <div className="h-3 bg-main-black w-full mt-1"></div>

        <div className="lg:flex lg:gap-16">
        <div className="flex gap-16">
        <div className="mt-8">
          <h5 className="font-semibold text-xl">Lenguajes</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>C#</li>
            <li>Dart</li>
            <li>Kotlin</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="mt-8">
          <h5 className="font-semibold text-xl">Base de Datos</h5>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>SQL Server</li>
            <li>SQLite</li>
          </ul>
        </div>
        </div>

        <div className="flex gap-16">
        <div className="mt-8">
          <h5 className="font-semibold text-xl">Frameworks</h5>
          <ul>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Flutter</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="mt-8">
          <h5 className="font-semibold text-xl">Otros</h5>
          <ul>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobre Premiere</li>
            <li>Wordpress (Elementor & Flatsome)</li>
          </ul>
        </div>
        </div>
        </div>
        
      </div>
  );
}

export default Skills;
