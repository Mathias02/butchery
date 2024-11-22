import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='m-1 border-[1px] flex justify-between items-center px-7'>
      <Link href={'/'} className='p-4 flex flex-col justify-center'>
        <Image src='/cow-face.png' width={60} height={60} alt='logo' className=''/>
        <h2 className='text-xs text-red-800'>Meat Shop</h2>
      </Link>
      <div>
        <Image src='/hamburger-menu.png' alt='hamburger' width={40} height={40} className='md:hidden' />
      </div>
      <ul className='hidden md:flex gap-4 capitalize cursor-pointer'>
          <Link href={'/'}>
              <li className='text-primary'>home</li>
          </Link>
          <Link href={'/service'}>
              <li className='hover:text-primary'>service</li>
          </Link>
          <Link href={'/partners'}>
              <li className='hover:text-primary'>partners</li>
          </Link>
          <Link href={'/contact'}>
              <li className='hover:text-primary'>contact</li>
          </Link>
      </ul>
    </div>
  )
}

export default Header