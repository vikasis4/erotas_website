'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


function RightBar(router: any) {

  return (
    <div className="flex w-full justify-center items-center gap-8">
      <h1 className="hover:cursor-pointer" onClick={() => router.router.push('/auth')}>SignUp</h1>
      <div className="hover:cursor-pointer relative">
        <Image alt="arotas" width={30} height={30} src={require('../assets/icon/love.png')} />
        <h1 className="absolute bottom-6 left-7 text-red-500 text-bold">0</h1>
      </div>
      <div className="hover:cursor-pointer relative">
        <Image alt="arotas" width={30} height={30} src={require('../assets/icon/cart.png')} />
        <h1 className="absolute bottom-6 left-7 text-red-500 text-bold">0</h1>
      </div>
    </div>
  )
}
function LeftBar() {

  return (
    <div className="flex w-full justify-center items-center gap-8">
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/insta.png')} />
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/twit.png')} />
      <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/tele.png')} />
    </div>
  )
}

function Navbar() {

  const router = useRouter()

  return (
    <div className="flex justify-center items-center w-full h-24 bg-[#F5F5F5]">
      <LeftBar />
      <Image onClick={() => router.push('/')} className='hover:cursor-pointer' alt="arotas" width={50} height={50} src={require('../assets/icon/hnm.png')} />
      <RightBar router={router} />
    </div>
  )
}

export default Navbar