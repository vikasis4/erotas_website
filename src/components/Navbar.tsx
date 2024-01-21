'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useCart from '@/hooks/cart/useCart'
import useGeneral from '@/hooks/general/useGeneral'
import { user, insta, twit, tele } from '@/config/images'
import Menu from './Menu'
import { BagS } from './ui/svg/Menu'

function RightBar(router: any) {

  const { isAuthenticated } = useGeneral();
  const cart = useCart()


  return (
    <div className="flex md:w-full font-mono justify-center items-center gap-4 md:gap-6 relative">
      <div className="flex flex-col justify-center items-center">
        {isAuthenticated ?
          <Image onClick={() => router.router.push('/account')} src={user} alt='erota' height='50' width='50' className='lg:hover:cursor-pointer lg:block hidden shadow-md rounded-full' />
          :
          <h1 className="hover:cursor-pointer text-black text-xl" onClick={() => router.router.push('/auth')}>SignUp</h1>}
      </div>
      <div onClick={() => router.router.push('/cart')} className="hover:cursor-pointer relative">
        <BagS />
        <h1 className="absolute font-poppin bottom-9 left-8">{isAuthenticated ? cart.length : 0}</h1>
      </div>
    </div>
  )
}
function LeftBar() {

  return (
    <div className="hidden lg:flex w-full justify-center items-center gap-8">
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={insta} />
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={twit} />
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={tele} />
    </div>
  )
}

function Navbar() {

  const router = useRouter();

  return (
    <div className="p-4 box-border flex justify-between md:justify-center items-center w-full h-24">
      <LeftBar />
      <div className="flex gap-2 justify-center items-center">
        <div className="lg:hidden flex justify-center items-center">
          <Menu />
        </div>
        <h1 onClick={() => router.push('/')} className='font-playfair text-4xl text-primary'>Erota</h1>
      </div>
      <RightBar router={router} />
    </div>
  )
}

export default Navbar