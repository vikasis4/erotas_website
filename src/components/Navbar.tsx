'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useCart from '@/hooks/cart/useCart'
import useGeneral from '@/hooks/general/useGeneral'
import { user, insta, twit, tele, love } from '@/config/images'
import Menu from './Menu'
import bag from '@/assets/icon/bag.png'

function RightBar(router: any) {

  const { isAuthenticated } = useGeneral();
  const cart = useCart()
  var dim = 35;

  return (
    <div className="flex md:w-full font-mono justify-center items-center gap-4 md:gap-6 relative">
      <div className="flex justify-center items-center gap-3">
        {isAuthenticated ?
          <>
            <Image onClick={() => router.router.push('/account')} src={user} alt='erota' height='50' width='50' className='lg:hover:cursor-pointer active:scale-90 duration-150 lg:block hidden shadow-md rounded-full' />
            <Image onClick={() => router.router.push('/wishlist')} className='active:scale-90 duration-150' src={love} alt="erota" height={dim} width={dim} />
            <div onClick={() => router.router.push('/cart')} className="active:scale-90 duration-150 hover:cursor-pointer relative">
              <Image src={bag} alt="erota" height={dim} width={dim} />
              <h1 className="absolute font-poppin font-semibold bottom-7 left-7">{isAuthenticated ? cart.length : 0}</h1>
            </div>
          </>
          :
          <h1 className="hover:cursor-pointer active:scale-90 duration-150 font-semibold text-gray-700 font-poppin text-2xl" onClick={() => router.router.push('/auth')}>SignUp</h1>}
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
        <h1 onClick={() => router.push('/')} className='font-playfair text-4xl text-primary'>EROTA</h1>
      </div>
      <RightBar router={router} />
    </div>
  )
}

export default Navbar