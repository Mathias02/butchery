import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Detailed = () => {
  return (
    <div className='md:flex gap-4 py-8 px-3'>
        <Image src={'https://www.redefinemeat.com/wp-content/uploads/2022/04/BLOG1.jpg'} alt='main-pic' width={450} height={850} className='h-500 w-120 object-cover border p-2'/>
        <div className='flex justify-start items-center flex-col py-5 border-[1px] px-4'>
            <h1 className='capitalize font-bold text-left text-2xl'>meat</h1>
            <h2><span className='font-bold'>category:</span> beef</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium quod nemo minus vitae, excepturi tempore vero provident animi placeat est iusto culpa quis corporis unde veritatis praesentium magni iste.</p>
            <Button>Purchase</Button>
        </div>
    </div>
  )
}

export default Detailed