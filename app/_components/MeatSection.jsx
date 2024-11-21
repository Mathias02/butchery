
"use client"

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import GlobalApi from '../_utils/GlobalApi';


const MeatSection = () => {
    const [prod,setProd] = useState('all');
    const [businessMeat, setBusinessMeat] = useState([]);
    const [category, setCategory] = useState(true);
    


    const path = useSearchParams();

    useEffect(() =>{
         path&&setProd(path.get('category'));
         path&&meatRange(path.get("category"));
         console.log(path.get("category"))
       },[path]);

       const meatRange = (pro) => {
        GlobalApi.GetProducts(pro).then(resp =>{
        setBusinessMeat(resp?.meats)
      })
      }


  return (
  <div className='mt-10 flex flex-col'>
    <div className='flex justify-center'>
      <h1 className='text-2xl py-5 ml-9'>Range of {prod}</h1>
    </div>
    <div className='flex justify-center gap-4 flex-wrap'>
     {
      businessMeat&&businessMeat.map((item, index) => {
        return(
          <Link href={'/category/category='+item.name} key={index} className='rounded-lg mb-2 px-8 border'>
            <Image src={item.icon[0]?.url} alt={item.slug} width={200} height={180} className='object-contain h-80 rounded-lg' />
            <div className='mt-3 px-6 py-5 md:flex justify-between w-full'>
              <h2 className='text-gray-500 text-xl text-left font-medium'>{item.name}</h2>
              <p>${item.price}</p>
            </div>
            <div className='mb-3'>
              <p className='ml-5'>{item.description}</p>
            </div>
          </Link>
        )
      })
     }
    </div>
  </div>
  

  )
}

export default MeatSection