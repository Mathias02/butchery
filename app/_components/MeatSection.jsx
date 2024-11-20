
"use client"

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image';


const MeatSection = ({list}) => {
    const [prod,setProd] = useState();
    


    const parameter = useSearchParams();

    useEffect(() =>{
        parameter&&setProd(parameter.get('category'));
       },[parameter]);


  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Range of {prod}</h2>
      </header>
  
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {
            list.map((item, index) => {
                return(
                    <li key={index}>
                        <a href="#" className="group block overflow-hidden">
                            <Image
                            src={item.icon[0]?.url}
                            alt={item.slug}
                            width={300}
                            height={300}
                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px] md:w-[350px]"
                            />
                
                            <div className="relative bg-white pt-3">
                                <h3 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    {item.name}
                                </h3>
                    
                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>
                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>
                )  
            })
        }    
      </ul>
    </div>
  </section>
  

  )
}

export default MeatSection