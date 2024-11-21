"use client"

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {


  const path = usePathname();

  useEffect(() =>{
    console.log(path.split('/')[3])
  },[])

  return (
    <div>poiut</div>
  )
}

export default page