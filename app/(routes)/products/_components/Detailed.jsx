"use client"

import { upgradeContext } from '@/app/_context/ContextUpgrade'
import GlobalApi from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'


  const Detailed = ({piece}) => { 
    const{upgrade,setUpgrade} = useContext(upgradeContext)

    const addToCardHandler = (piece) => {
      toast("Add to cart")
      const data={
        name:piece?.name,
        description:piece?.description,
        price:piece?.price,
        pics:piece?.pics[0]?.url
      }
      GlobalApi.AddToCarts(data).then((resp) => {
        console.log(resp)
        setUpgrade(!upgrade)
        toast("Add to cart")
      },(error) => {
        toast("error in adding to cart");
      })
    }

  return (
    <div className='lg:flex gap-6 py-8 px-8 mt-9  border max-w-screen-lg mx-auto'>
      <Image src={piece?.pics&&piece?.pics[0]?.url} width={450} height={300} alt='slug' className='w-400 h-250 object-contain' />
      <div className='flex justify-start items-start flex-col py-6 border-[1px] px-5'>
          <h1 className='capitalize font-bold text-left text-3xl mb-3'>{piece.name}</h1>
          <p className='tracking-wide mb-3'>{piece.description}</p>
          <h2 className='mb-3 border-black border-[2px] mt-2 border-dotted p-5 
          w-18 rounded-full h-18  font-bold text-black text-2xl'>${piece.price}</h2>
          <Button className='w-full py-3 text-center mt-7 hover:bg-black hover:text-white 
          rounded-xl bg-primary' onClick={() => addToCardHandler(piece) }>Purchase</Button>
      </div>   
    </div>
  )
}

export default Detailed