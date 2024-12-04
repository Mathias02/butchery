import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Carts from './Carts'


const Header = () => {
  return (
  <div className='flex justify-between items-center'>
      <div>
         <div className='ml-3 py-4'>
           <Image src='/cow-face.png' width={60} height={60} alt='logo' className='mb-2'/>
           <h2 className='text-xs text-red-800'>Meat Shop</h2>
         </div>
      </div>
      
      <div className='flex gap-2 items-center justify-start'>
         
          <Popover>
              <PopoverTrigger asChild>
                <div className='flex justify-end gap-2 cursor-pointer hover:bg-gray-100 hover:rounded-xl p-3'>
                    <ShoppingCart className='w-[30px] h-[30px]'/>
                    <label className='bg-gray-500 text-white text-xl rounded-full h-9 w-9 flex items-center justify-center'>0</label>
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