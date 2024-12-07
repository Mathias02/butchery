"use client"

import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Carts from './Carts'
import { upgradeContext } from '../_context/ContextUpgrade'
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link'


const Header = () => {
  const{upgrade,setUpgrade} = useContext(upgradeContext)
  const[cart,setCart] = useState([])



useEffect(() =>{
console.log('lol');
GetCartItems();
},[upgrade]);


const GetCartItems = () => {
  GlobalApi.CartItems().then(resp => {
    setCart(resp.meatCarts)
  })
}

  return (
  <div className='flex justify-between items-center'>
      <div>
         <div className='ml-3 py-4'>
          <Link href={'/'}><Image src='/cow-face.png' width={60} height={60} alt='logo' className='mb-2'/></Link>
           <h2 className='text-xs text-red-800'>Meat Shop</h2>
         </div>
      </div>
      
      <div className='flex gap-2 items-center justify-start'>
         
          <Popover>
              <PopoverTrigger asChild>
                <div className='flex justify-end gap-2 cursor-pointer hover:bg-gray-100 hover:rounded-xl p-3'>
                    <ShoppingCart className='w-[30px] h-[30px]'/>
                    <label className='bg-gray-500 text-white text-xl rounded-full h-9 w-9 flex items-center justify-center'>{cart?.length}</label>
                </div>
              </PopoverTrigger>
              <PopoverContent>
              <Carts />
              </PopoverContent>
          </Popover>

          <Button className='rounded-xl hover:text-white hover:bg-black'>Get started</Button>
      </div>
  </div>
  )
}

export default Header