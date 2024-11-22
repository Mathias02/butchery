"use client"

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
const [item,setItem] = useState();

  const path = usePathname();

  useEffect(() =>{
    setItem(path.split('=')[1]);
  console.log(path.split('=')[1])
  },[path])

  return (
    <div>hello {item}</div>
  )
}

export default page