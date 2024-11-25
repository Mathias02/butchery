"use client"

import ProductPage from '@/app/_components/ProductLists'
import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const categoryPage = () => {
    const [categoryItems, setCategoryItems] = useState([]);
    const [items,setItems] = useState();
    const [businessMeat,setBusinessMeat] = useState([]);


    const params = useSearchParams();


  useEffect(() => {
    params&&setItems(params.get('category'));
    params&&meatLists(params.get('category'))
    },[params]);



    useEffect(() => {
        categoryTypes();
    });

    const categoryTypes = () =>{
        GlobalApi.GetCategories().then((resp) =>{
            setCategoryItems(resp.categories);
        })
    };

      

    const meatLists = (elem) => {
        GlobalApi.GetProducts(elem).then(resp =>{
        setBusinessMeat(resp?.meats);
        })
      }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-wrap py-6 gap-2 justify-center'>
            {categoryItems&&categoryItems.map((item, index) => {
              return(
                  <Link href={'?category='+item.slug} key={index} className={`flex flex-col gap-4 justify-center items-center cursor-pointer 
                  hover:scale-105 transition ease-in-out group border rounded-lg p-3 ${items==item.slug&&'border-primary text-primary rounded-xl'}`}>
                      <Image src={item.icon?.url} width={75} height={75} alt={item.name} className='lg:h-32 lg:w-32 rounded-full border-black p-1' />
                      <h2 className='lg:text-md capitalize tracking-wide group-hover:text-primary'>{item.name}</h2>
                  </Link>
                )    
            })}
        </div>

        <ProductPage   businessItems={businessMeat} />
    </div>
  )
}

export default categoryPage