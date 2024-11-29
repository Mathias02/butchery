import Image from 'next/image'
import React from 'react'

const Icon = () => {
  return (
    <div>
        <Image src={'https://www.redefinemeat.com/wp-content/uploads/2022/04/BLOG1.jpg'} alt='topimg' width={1950} height={90} className='h-32 object-cover' />
    </div>
  )
}

export default Icon