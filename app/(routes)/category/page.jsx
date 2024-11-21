"use client"

import React, { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi';
import CategoryMap from '../../_components/CategoryList';
import MeatSection from '@/app/_components/MeatSection';


const categoryPage = () => {
    const [categoryLists,setCategoryLists] = useState([]);


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
        {/* category */}
        <CategoryMap listCategory={categoryLists} />

        <MeatSection />

    </div>
  )
 }

export default categoryPage