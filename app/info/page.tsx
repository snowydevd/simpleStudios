import React from 'react'
import Image from 'next/image'
import laptop from '../assets/info-lap.webp'
import ecommerce from '../assets/e-commerce.svg'

import SimpleButton from '../components/SimpleButton'

export default function Info() {
  return (
    <main className='flex flex-col items-center justify-center'>
        {/* CONTAINER */}
        <div className='flex flex-col w-5/6 mt-12 p-4'>
          
          {/* SUB-CONTAINER */}
          <div className=' flex flex-col lg:flex-row mt-0 lg:mt-3'>
            {/* BLOCKS */}
            {/* LARGE */}
            <div className='animate-fade-down animate-duration-1000  flex flex-row p-8 bg-zinc-900 rounded-lg w-5/5 lg:w-3/5 mt-3'>
              <div className='flex flex-col items-center justify-center text-center lg:text-start lg:justify-start lg:items-start text-2xl lg:text-4xl'>
                <h1 className='text-3xl font-bold mb-3'><strong>A que nos dedicamos?</strong></h1>
                <p className='text-3xl '><strong>Nos dedicamos a realizar paginas web para grandes y pequeñas empresas</strong></p>
                <SimpleButton><a href="./services"><p className='text-2xl'>Comenzar</p></a></SimpleButton>
              </div>
            </div>

            {/* SMALL */}
            <div className='animate-fade-left animate-duration-1000  flex flex-col p-8 bg-zinc-900 lg:ml-3 rounded-lg w-5/5 lg:w-2/5 mt-3 text-center lg:text-left'>
              <h1 className='text-3xl font-bold mb-3'><strong>Asesoramiento</strong></h1>
              <p className='text-2xl '><strong>Te guiamos en la creacion de tu pagina web para que tenga mayor acceso</strong></p>
            </div>

          </div>

          {/* SUB-CONTAINER */}
          <div className='flex flex-col lg:flex-row mb-3'>
            {/* BLOCKS */}
            {/* SMALL */}
            <div className='animate-fade-right animate-duration-1000  flex flex-col p-8 bg-zinc-900 rounded-lg w-5/5 lg:w-2/5 mt-3 text-center lg:text-left'>
              <h1 className='text-3xl font-bold mb-3'><strong>Catalogo</strong></h1>
              <p className='text-2xl'><strong>Creamos tu catalogo de productos para que sea lo mas accesible y sencillo posible</strong></p>
            </div>
              {/* LARGE */}
            <div className='animate-fade-up animate-duration-1000  flex flex-col lg:flex-row lg:items-start items-center justify-center lg:justify-between bg-zinc-900 rounded-lg lg:ml-3 w-5/5 lg:w-3/5 mt-3'>
              <div className='flex flex-col p-7 text-center lg:text-left text-2xl  lg:text-4xl'>
                <h1 className='font-bold mb-3 text-4xl'><strong>Comercio electronico</strong></h1>
                <p className='text-2xl'><strong>Empieza a vender de forma remota con e-commerce</strong></p>
              </div>
           
              <Image
                className=' lg:mr-14'
                src={ecommerce}
                width={300}
                height={300}
                alt='laptop'
              />
              
            </div>

          </div>

          
          
          


    
          
          
        </div>
       
      </main>
  )
}
