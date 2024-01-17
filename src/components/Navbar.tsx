'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useCart from '@/hooks/cart/useCart'
import useGeneral from '@/hooks/general/useGeneral'

function RightBar(router: any) {

  const { isAuthenticated } = useGeneral();  
  const cart = useCart()


  return (
    <div className="flex md:w-full font-poppin justify-center items-center gap-4 md:gap-6 relative">
      <div className="flex flex-col justify-center items-center">
        {isAuthenticated ?
          <Image onClick={() => router.router.push('/account')} src={require('../assets/icon/user.png')} alt='erota' height='50' width='50' className='lg:hover:cursor-pointer shadow-md rounded-full' />
          :
          <h1 className="hover:cursor-pointer  text-black font-medium text-2xl" onClick={() => router.router.push('/auth')}>SignUp</h1>}
      </div>
      <div className="hover:cursor-pointer relative">
        <Image onClick={() => router.router.push('/cart')} alt="arotas" width={40} height={40} src={require('../assets/icon/cart.png')} />
        <h1 className="absolute font-poppin bottom-9 left-7 text-red-500 font-bold">{isAuthenticated ? cart.length : 0}</h1>
      </div>
    </div>
  )
}
function LeftBar() {

  return (
    <div className="hidden lg:flex w-full justify-center items-center gap-8">
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/insta.png')} />
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/twit.png')} />
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/tele.png')} />
    </div>
  )
}

function Navbar() {

  const router = useRouter();

  return (
    <div className="p-4 box-border flex justify-between md:justify-center items-center w-full h-24 bg-[#F5F5F5]">
      <LeftBar />
      <Image onClick={() => router.push('/')} className='hover:cursor-pointer rounded shadow-md' alt="erota" width={100} height={100} src={require('../assets/icon/logo.jpg')} />
      <RightBar router={router} />
    </div>
  )
}

export default Navbar