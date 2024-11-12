import React from 'react'

const Banner = () => {
  return (
    <div className="bg-butcherImg bg-repeat bg-cover bg-center">
        <div className='w-full h-[550px] bg-blackOverlay flex flex-col items-center justify-center '>
            <div className='w-full md:w-[750px] px-6'>
                <h1 className='px-3 text-4xl md:text-6xl text-white mb-5 font-semibold'><span className='text-primary'>Meat cuts and </span>quality of cuts</h1>
                <h3 className='text-white md:text-xl tracking-wide'>We offer premium quality meats and exceptional customer services at our butcher shop, ensuring the freshest cuts for your table.</h3>
            </div>
            <div className='mt-5 border-[1px] px-6 py-3 rounded-lg'>
               <h1 className='text-primary text-3xl font-semibold'>Shop now</h1>
            </div>
        </div>
  </div>
  )
}

export default Banner