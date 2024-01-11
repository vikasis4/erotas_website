'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { useFetchUserQuery } from '@/redux/slice/user/index'
import { getJWTtoken } from '../utils/getJWTtoken'


function RightBar(router: any) {

  const general = useAppSelector((state) => state.general)
  const token = getJWTtoken()
  const { data } = useFetchUserQuery(token);  


  return (
    <div className="flex w-full justify-center items-center gap-8">
      <h1 className="hover:cursor-pointer" onClick={() => router.router.push('/auth')}>{general.isAuthenticated ? data?.data.name : 'SignUp'}</h1>
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

  const router = useRouter();
  // const { data, isLoading } = useFetchUserQuery('x2987nx20x8dim');
  // console.log("data ", data);
  // console.log("IsLoading ", isLoading);

  return (
    <div className="flex justify-center items-center w-full h-24 bg-[#F5F5F5]">
      <LeftBar />
      <Image onClick={() => router.push('/')} className='hover:cursor-pointer' alt="arotas" width={50} height={50} src={require('../assets/icon/hnm.png')} />
      <RightBar router={router} />
    </div>
  )
}

export default Navbar