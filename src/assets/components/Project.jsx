import React from 'react'
import Arrow from '../images/arrow-up.svg'

function Project({project}) {

    const {id, name, type, technologies, date} = project

  return (
    <div className='py-4 lg:flex lg:justify-between border-b border-ligth-black lg:py-8'>

        <div className='flex gap-10'>
            <h3 className='text-4xl text-main-black'>{id}</h3>
            <div className='lg:flex lg:flex-col gap-1'>
                <h2 className='text-4xl lg:text-5xl font-medium' >{name}</h2>
                <p className='text-xl lg:text-2xl '> {type} </p>
                <p className='lg:text-lg'> {technologies} </p>
            </div>
        </div>

        <div className='flex flex-row-reverse justify-between items-center lg:flex-col lg:items-end'>
            <img className='rotate-[30deg] w-16 lg:rotate-0' src={Arrow} alt="Arrow Up"/>
            <p className='ml-[76px] lg:mr-4'> {date} </p>
        </div>

    </div>
  )
}

export default Project