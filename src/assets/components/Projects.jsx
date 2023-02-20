import React, { useState } from 'react'
import Project from './Project'
import ProjectJSON from '../documents/projects.js'
import Arrow from '../images/arrow-right.svg'

function Projects() {

  const [activeArrow, setActiveArrow] = useState(false)

  return (
    <div className='px-5 mt-20 lg:px-16'>
      <h2 className='text-3xl lg:text-5xl'>Mis proyectos más relevantes</h2>
      <div className='w-[100%] h-1 bg-main-black mt-4 '></div>
      <div className='w-[100%] h-2 bg-main-black mt-2 '></div>
      <div className='w-[100%] h-3 bg-main-black mt-2 mb-6'></div>

      {ProjectJSON.map((project) => (
        <Project project={project} />
      ))}

      <a className='all-projects-hover h-20 flex items-center justify-between border-b border-ligth-black' href='#'>
        <p>Todos mis proyectos</p>
        <img id='arrow-project' src={Arrow} className={`w-10 ${activeArrow ? 'filter-whie' : ''} `} />
      </a>

    </div>
  )
}

export default Projects