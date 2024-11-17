import Image from 'next/image'
import React from 'react'

const Icon = () => {
  return (
    <div className='p-1'>
        <Image src='https://blog.homesalive.ca/hubfs/Home%20Alive%20Webp%20Image%20Assets/several%20animal%20proteins.webp' width={400} height={200} alt='img' className='object-cover w-full h-52'/>
    </div>
  )
}

export default Icon