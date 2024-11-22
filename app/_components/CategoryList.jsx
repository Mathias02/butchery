"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'



  const CategoryMap = () => {
  const [item,setItem] = useState();
  const [categoryLists,setCategoryLists] = useState([]);

  const params = useSearchParams();

  useEffect(() => {
    params&&setItem(params.get('category'));
    },[params]);



  useEffect(() =>{
      category();  
  },[])

  const category = () => {
      GlobalApi.GetCategories().then(resp => {
          setCategoryLists(resp.categories)
      })
  };


  return (
    <div>
        <div className='flex flex-wrap py-6 gap-2 justify-center'>
            {categoryLists.map((list, index) => {
              return(
                  <Link href={'?category='+list.slug} key={index} className={`flex flex-col gap-4 justify-center items-center cursor-pointer 
                  hover:scale-105 transition ease-in-out group border rounded-lg p-3 ${item==list.slug&&'border-primary text-primary rounded-xl'}`}>
                      <Image src={list.icon?.url} width={75} height={75} alt={list.name} className='lg:h-32 lg:w-32 rounded-full border-black p-1' />
                      <h2 className='lg:text-md capitalize tracking-wide group-hover:text-primary'>{list.name}</h2>
                  </Link>
                )    
            })}
        </div>
    </div>
  ) 
}

export default CategoryMap