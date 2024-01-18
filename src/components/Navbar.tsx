'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useCart from '@/hooks/cart/useCart'
import useGeneral from '@/hooks/general/useGeneral'
import { user, cartImg, insta, twit, tele, logo } from '@/config/images'

function RightBar(router: any) {

  const { isAuthenticated } = useGeneral();  
  const cart = useCart()


  return (
    <div className="flex md:w-full font-poppin justify-center items-center gap-4 md:gap-6 relative">
      <div className="flex flex-col justify-center items-center">
        {isAuthenticated ?
          <Image onClick={() => router.router.push('/account')} src={user} alt='erota' height='50' width='50' className='lg:hover:cursor-pointer shadow-md rounded-full' />
          :
          <h1 className="hover:cursor-pointer  text-black font-medium text-2xl" onClick={() => router.router.push('/auth')}>SignUp</h1>}
      </div>
      <div className="hover:cursor-pointer relative">
        <Image onClick={() => router.router.push('/cart')} alt="arotas" width={40} height={40} src={cartImg} />
        <h1 className="absolute font-poppin bottom-9 left-7 text-red-500 font-bold">{isAuthenticated ? cart.length : 0}</h1>
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
    <div className="p-4 box-border flex justify-between md:justify-center items-center w-full h-24 bg-[#F5F5F5]">
      <LeftBar />
      <Image onClick={() => router.push('/')} className='hover:cursor-pointer' alt="erota" width={140} height={140} src={logo} />
      <RightBar router={router} />
    </div>
  )
}

export default Navbar