import Image from 'next/image'
import React from 'react'

const Icon = () => {
  return (
    <div className='p-1'>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/a/ae/FoodMeat.jpg' width={600} height={200} alt='img' className='object-cover w-full h-72 sx:h-10'/>
    </div>
  )
}

export default Icon