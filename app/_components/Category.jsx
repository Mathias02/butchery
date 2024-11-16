
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = ({listCategory}) => {


  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 py-7 gap-3'>
        {listCategory.map((list, index) => {
          
          return(
            <Link href={'/products'} key={index} className='flex flex-col gap-4 justify-center items-center cursor-pointer hover:scale-105 transition-all ease-in-out group'>
                <Image src={list.icon?.url} width={130} height={120} alt={list.name} className='h-32 rounded-full border-black p-1' />
                <h2 className='capitalize tracking-wide group-hover:text-primary'>{list.name}</h2>
            </Link>
          )
        })}
    
    </div>
  ) 
}

export default CategoryList