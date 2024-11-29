"use client"


import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProductPage = ({businessItems}) => {

    const [prodName,setProdName] = useState('all');

    const path = useSearchParams();

    useEffect(() =>{
         path&&setProdName(path.get('category'));
       },[path]);


  return (
  <div className='mt-10 flex flex-col'>
        <div className='flex justify-center'>
          <h1 className='text-2xl py-5 ml-9'>Range of {prodName}</h1>
        </div>
        <div className='flex justify-center gap-4 flex-wrap'>
          {
            businessItems&&businessItems.map((item, index) => {
              return(
                <Link href={'/products/'+item.slug} key={index} className='rounded-lg mb-2 px-8 border'>
                  <Image src={item.pics[0]?.url} alt={item.slug} width={200} height={180} className='object-contain h-80 rounded-lg' />
                  <div className='mt-3 py-5 md:flex justify-between'>
                    <h2 className='text-gray-500 text-xl text-left font-medium'>{item.name}</h2>
                    <p className='text-primary'>${item.price}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
  </div>
  

  )
}

export default ProductPage