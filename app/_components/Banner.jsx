import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-butcherImg bg-repeat bg-cover bg-bottom'>
      <div className='w-full h-screen flex items-center justify-center bg-blackOverlay'>
        <div className='container mx-auto flex flex-col items-center justify-center gap-4 sm:gap-7'>
          <h1 className='text-white text-4xl sm:text-6xl mb-10 font-semibold capitalize pl-4'>fresh <span className='text-primary'>cut and premium </span>quality meats</h1>
          <Link href={'/category'} className='rounded-full capitalize text-xl sm:text-2xl px-5 py-3 
          sm:px-5 sm:py-4 text-primary bg-black border font-medium hover:bg-white hover:transition ease-in-out hover:text-black'>start shopping</Link>
        </div>
      </div>
  
    </div>
  )
}

export default Banner