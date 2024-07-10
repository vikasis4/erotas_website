'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useCart from '@/hooks/cart/useCart'
import useGeneral from '@/hooks/general/useGeneral'
import { user, insta, twit, tele, love } from '@/config/images'
import Menu from './Menu'
import bag from '@/assets/icon/bag.png'
import useWishList from '@/hooks/wishlist/useWishList'

function RightBar(router: any) {

  const { isAuthenticated } = useGeneral();
  const { getWishList } = useWishList();
  const wishList = getWishList()

  const cart = useCart()
  var dim = 35;

  return (
    <div className="flex md:w-full font-mono justify-center items-center gap-4 md:gap-6 relative">
      <div className="flex justify-center items-center gap-6">
        {isAuthenticated ?
          <>
            <Image onClick={() => router.router.push('/account')} src={user} alt='erota' height={dim} width={dim} className='lg:hover:cursor-pointer active:scale-90 duration-150 lg:block hidden' />

            <div onClick={() => router.router.push('/wishlist')} className="active:scale-90 duration-150 hover:cursor-pointer relative">
              <Image src={love} alt="erota" height={dim} width={dim} />
              <h1 className="absolute text-base font-poppin font-semibold bottom-7 left-8 text-primary">{isAuthenticated ? wishList.length : 0}</h1>
            </div>

            <div onClick={() => router.router.push('/cart')} className="active:scale-90 duration-150 hover:cursor-pointer relative">
              <Image src={bag} alt="erota" height={dim} width={dim} />
              <h1 className="absolute font-poppin text-base text-primary font-semibold bottom-7 left-7">{isAuthenticated ? cart.length : 0}</h1>
            </div>
          </>
          :
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.router.push('/auth')}
              className="border border-primary text-hsl(240, 10%, 3.9%) px-4 py-2 rounded-md font-poppin hover:bg-primary hover:text-white transition-colors duration-400"
            >
              Login
            </button>
            <div onClick={() => router.router.push('/wishlist')} className="flex justify-center relative items-center duration-150 hover:cursor-pointer">
              <div className="w-7 h-7 text-primary">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h1 className="font-poppin text-primary text-center relative bottom-3">{isAuthenticated ? wishList.length : 0}</h1>
            </div>
          </div>
        }
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
        <h1 onClick={() => router.push('/')} className='font-playfair hover:cursor-pointer text-4xl text-primary'>EROTA</h1>
      </div>
      <RightBar router={router} />
    </div>
  )
}

export default Navbar