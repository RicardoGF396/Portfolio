import React, { useState } from "react";
import fm01 from "../images/projects/frontendMentor01.png";
import fm02 from "../images/projects/frontendMentor02.png";
import fm03 from "../images/projects/frontendMentor03.png";
import fm04 from "../images/projects/frontendMentor04.png";
import fm05 from "../images/projects/frontendMentor05.png";
import fm06 from "../images/projects/frontendMentor06.png";
import fm07 from "../images/projects/frontendMentor07.png";
import fm08 from "../images/projects/frontendMentor08.png";
import fm09 from "../images/projects/frontendMentor09.png";
import fm10 from "../images/projects/frontendMentor10.png";
import fm11 from "../images/projects/frontendMentor11.png";
import canadian from "../images/projects/Canadian.png";
import telvet from "../images/projects/Telvet.png";
import coffemasmas from "../images/projects/CoffeMasMas.png";
import seguclean from "../images/projects/Seguclean.png";
import mymovies from "../images/projects/MyMovies.jpeg";
import reactChallenge from "../images/projects/reactChallenge.png";
import realPlace from "../images/projects/RealPlace.png";
import close from "../images/close.svg";

function AllProjects({setIsOpenProjects}) {

  return (
    <div>
        <button onClick={() => {
            setIsOpenProjects(false)
        }} className="sticky flex justify-center items-center py-4 px-4 top-5 left-[62%] lg:left-[92%] lg:top-9 lg:right-12 z-[52] rounded-full bg-main-black">
            <img className="w-[32px]" src={close} />
            <h2 className="text-2xl font-semibold text-main-white">Close</h2>
        </button>

      <div className="relative px-4 py-8 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-40 lg:grid-">
        <div className="flex flex-col gap-4">
        <a target={"_blank"} href="https://ricardogf396.github.io/-Base-Apparel-coming-soon-page/">
          <img className="rounded-xl object-cover" src={fm01} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/Four-Card-Feature-Frontend-Mentor/">
          <img className="rounded-xl object-cover" src={fm02} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/QR-Code-component-Fronend-Mentor/">
          <img className="rounded-xl object-cover" src={fm03} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/NFT-Card/">
          <img className="rounded-xl object-cover" src={fm04} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/Interactive-Rating-Component/">
          <img className="rounded-xl object-cover" src={fm05} />
        </a>
        
        </div>

        <div className="flex flex-col gap-4">
        <a target={"_blank"} href="https://ricardogf396.github.io/FAQ-Accordion/">
          <img className="rounded-xl object-cover" src={fm07} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/Social-Proof-Section/">
          <img className="rounded-xl object-cover" src={fm08} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/Tip-Calculator-App-Solution/">
          <img className="rounded-xl object-cover" src={fm09} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/3-columns/">
          <img className="rounded-xl object-cover" src={fm10} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/Card-Responsive/">
          <img className="rounded-xl object-cover" src={fm11} />
        </a>
        <a target={"_blank"} href="http://yocontigo-it.com.mx/canadianschool/">
          <img className="rounded-xl object-cover" src={canadian} />
        </a>
        <a target={"_blank"} href="https://ricardogf396.github.io/Article-Preview/">
          <img className="rounded-xl object-cover" src={fm06} />
        </a>
        </div>

        <div className="flex flex-col gap-4">
        <a target={"_blank"} href="https://yocontigo-it.com.mx/coffeemasmas/">
          <img className="rounded-xl object-cover" src={coffemasmas} />
        </a>
        <a target={"_blank"} href="https://seguclean.com/">
          <img className="rounded-xl object-cover" src={seguclean} />
        </a>
        <a target={"_blank"} href="https://telvet.com.mx/">
          <img className="rounded-xl object-cover" src={telvet} />
        </a>
        <a target={"_blank"} href="https://mymoviesrgf.netlify.app/">
          <img className="rounded-xl object-cover" src={mymovies} />
        </a>
        <a target={"_blank"} href="https://frontend-rgf.netlify.app/">
          <img className="rounded-xl object-cover" src={reactChallenge} />
        </a>
        <a target={"_blank"} href="https://github.com/RicardoGF396/Georeferenciados_PrimerParcial">
          <img className="rounded-xl object-cover" src={realPlace} />
        </a>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
