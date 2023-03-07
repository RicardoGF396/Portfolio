import React, { useState } from 'react'
import Project from './Project'
import ProjectJSON from '../documents/projects.js'
import Arrow from '../images/arrow-right.svg'
import AllProjects from './AllProjects'
import AllDesigns from './AllDesigns'

function Projects() {

  const [activeArrow, setActiveArrow] = useState(false)
  const [isOpenProjects, setIsOpenProjects] = useState(false)
  const [isOpenDesigns, setIsOpenDesigns] = useState(false)

  return (
    <div id='proyectos' className='px-5 mt-20 lg:px-16'>
      <div className={`fixed top-0 z-[68] transition-all duration-300 bg-main-white w-full h-screen overflow-y-scroll 
    ${isOpenProjects == false ? "left-[100%]" : "left-0"}`}>
        <AllProjects setIsOpenProjects={setIsOpenProjects} />
      </div>
      <div className={`fixed top-0 z-[68] transition-all duration-300 bg-main-white w-full h-screen overflow-y-scroll 
    ${isOpenDesigns == false ? "left-[100%]" : "left-0"}`}>
        <AllDesigns setIsOpenDesigns={setIsOpenDesigns} />
      </div>
      <h2 className='text-3xl lg:text-5xl'>Mis proyectos más relevantes</h2>
      <div className='w-[100%] h-1 bg-main-black mt-4 '></div>
      <div className='w-[100%] h-2 bg-main-black mt-2 '></div>
      <div className='w-[100%] h-3 bg-main-black mt-2 mb-6'></div>

      {ProjectJSON.map((project) => (
        <Project key={project.id} project={project} />
      ))}

      <button onClick={() => {
        setIsOpenProjects(true)
      }} className='all-projects-hover h-20 cursor-pointer w-full flex items-center justify-between border-b border-ligth-black'>
        <p>Todos mis proyectos</p>
        <img id='arrow-project' src={Arrow} className={`w-10 ${activeArrow ? 'filter-whie' : ''} `} />
      </button>
      <button
        onClick={() => {
          setIsOpenDesigns(true)
        }}
       className='all-projects-hover h-20 cursor-pointer w-full flex items-center justify-between border-b border-ligth-black'>
        <p>Diseños UI / UX</p>
        <img id='arrow-project' src={Arrow} className={`w-10 ${activeArrow ? 'filter-whie' : ''} `} />
      </button>

        

        
    </div>
  )
}

export default Projects