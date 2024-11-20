"use client"

import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import MeatSection from '../_components/MeatSection';
import CategoryMap from '../_components/Category';
import { useSearchParams } from 'next/navigation';

const categoryPage = () => {
    const  [categoryLists,setCategoryLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [businessMeat, setBusinessMeat] = useState([]);

    const parameter = useSearchParams();


    useEffect(() => {
    parameter&&meatRange(parameter.get("category"));
    },[parameter])

    useEffect(() =>{
        category();
        meatRange();
    },[])

    const category = () => {
        setLoading(true)
        GlobalApi.GetCategories().then(resp => {
            setCategoryLists(resp.categories)
            setLoading(false)
        })
    };

    const meatRange = (pro) => {
        GlobalApi.GetProducts(pro).then(resp =>{
        setBusinessMeat(resp.meats)
      })
      }

  return (
    <div>
        {/* category */}
        <CategoryMap listCategory={categoryLists} />

        {/* meat products */}

        <MeatSection list={businessMeat}/>
    </div>
  )
}

export default categoryPage