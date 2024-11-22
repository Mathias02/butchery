"use client"

import React, { useEffect, useState } from 'react'
import GlobalApi from '../../_utils/GlobalApi';
import CategoryMap from '../../_components/CategoryList';
import MeatSection from '@/app/_components/MeatSection';


const categoryPage = () => {

  return (
    <div>
        {/* category */}
        <CategoryMap />


        {/* products */}
        <MeatSection />

    </div>
  )
 }

export default categoryPage