'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer() {

  const router = useRouter()

  return (
    <>
      <div className="p-12 w-full mt-12 bg-red-100 flex justify-between items-center">
        <Image src={require('../assets/icon/logo.jpg')} alt="erota" height="200" width="200"
          className="rounded-md shadow-md " />
        <div className="font-poppin">
          <h1 className="font-bold text-2xl pb-8 underline">Useful Links</h1>
          <ul className="font-semibold flex flex-col gap-2">
            <li className="hover:cursor-pointer" onClick={() =>router.push('/credentials/contact')}>Contact Us</li>
            <li className="hover:cursor-pointer" onClick={() =>router.push('/credentials/privacy')}>Privacy Policy</li>
            <li className="hover:cursor-pointer" onClick={() =>router.push('/credentials/terms')}>Terms & Conditions</li>
            <li className="hover:cursor-pointer" onClick={() =>router.push('/credentials/shipping')}>Shipping and Delivery Policy</li>
            <li className="hover:cursor-pointer" onClick={() =>router.push('/credentials/refund')}>Refund and Cancellation Policy</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-8">
          <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/insta.png')} />
          <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/twit.png')} />
          <Image className="hover:cursor-pointer" alt="arotas" width={30} height={30} src={require('../assets/icon/tele.png')} />
        </div>
      </div>
      <h1 className="bg-red-100 text-center font-poppin">All rights reserved @2024 erotas.in</h1>
    </>
  )
}

export default Footer