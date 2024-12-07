"use client"

import React, { useState } from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'
import { Toaster } from "@/components/ui/toaster"
import { upgradeContext } from './_context/ContextUpgrade'


const Provider = ({children}) => {
  const [upgrade,setUpgrade] = useState(false);

  return (
    <upgradeContext.Provider value={{upgrade,setUpgrade}}>
      <div>
        <Header />
          {children}
          <Toaster />
        <Footer />
      </div>
    </upgradeContext.Provider>
  )
   
}

export default Provider