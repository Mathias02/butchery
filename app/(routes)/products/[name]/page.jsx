"use client"

import React, { useEffect, useState } from 'react'
import Detailed from '../_components/Detailed'
import { usePathname } from 'next/navigation'
import GlobalApi from '@/app/_utils/GlobalApi'

const DetailedPage = () => {
  const [piece,setPiece] = useState([]);

  const params = usePathname();


  useEffect(() => {
    dataDetailed(params.split('/')[2])
  },[]);

  const dataDetailed = (element) => {
    GlobalApi.GetProduct(element).then((resp) => {
      setPiece(resp?.meat);
      console.log(resp?.meat)
    })
  }

  return (
    <div>
       <Detailed piece={piece}  />
    </div>
  )
}

export default DetailedPage