import React from 'react'

function Footer() {
  return (
    <div className='px-5 mt-24 lg:px-16'>
        <h1 className='font-bold text-main-black text-6xl lg:text-9xl'>¡Vamos a hablar!</h1>
        <p className='text-xl my-6 lg:text-4xl'>Si te interesa mi perfil, no dudes en contactarte conmigo.</p>

        <div className='flex flex-wrap gap-2 lg:gap-6'>
        <a href='https://www.linkedin.com/in/ricardogf396/' className='px-9 py-2 border border-main-black rounded-full text-sm hover:bg-main-black hover:text-main-white transition-all duration-300 lg:text-2xl lg:px-12' >LinkedIn</a>

        <a href='tel:477412683' className='px-9 py-2 border border-main-black rounded-full text-sm hover:bg-main-black hover:text-main-white transition-all duration-300 lg:text-2xl lg:px-12' >Teléfono</a>

        <a href='mailto:ricardogf396@gmail.com' className='px-9 py-2 border border-main-black rounded-full text-sm hover:bg-main-black hover:text-main-white transition-all duration-300 lg:text-2xl lg:px-12' >Email</a>

        <a href='https://www.behance.net/ricardogonzle9' className='px-9 py-2 border border-main-black rounded-full text-sm hover:bg-main-black hover:text-main-white transition-all duration-300 lg:text-2xl lg:px-12' >Behance</a>

        <a href='https://github.com/RicardoGF396' className='px-9 py-2 border border-main-black rounded-full text-sm hover:bg-main-black hover:text-main-white transition-all duration-300 lg:text-2xl lg:px-12' >Github</a>
        
        </div>

        <p className='text-sm mt-12 pb-12 lg:text-base'>© 2023 | Ricardo González Flores. Todos los derechos reservados</p>
        
    </div>
  )
}

export default Footer