import Image from 'next/image'
import React from 'react'

const MyImage = () => {
  return (
    <div className='w-full mx-auto border-[2px]'>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25JU5d-D6gtDjO2rlTjdRt4SSMLDg-uJP9g&s' alt='img' width={350} height={200} className='w-full object-cover h-40 rounded-xl' />
    </div>
  )
}

export default MyImage