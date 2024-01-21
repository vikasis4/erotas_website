'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import {tele, twit, insta, logo} from '@/config/images'

function Footer() {

  const router = useRouter()

  return (
    <>
      <div className="p-12 w-full gap-12 flex-col lg:flex-row mt-12 bg-red-100 flex justify-between items-center">
      <h1 onClick={() => router.push('/')} className='font-playfair text-4xl text-primary'>EROTA</h1>
        <div className="font-playfair">
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
          <Image className="hover:cursor-pointer" alt="arotas" width={40} height={40} src={insta} />
          <Image className="hover:cursor-pointer" alt="arotas" width={40} height={40} src={twit} />
          <Image className="hover:cursor-pointer" alt="arotas" width={40} height={40} src={tele} />
        </div>
      </div>
      <h1 className="bg-red-300 text-xs font-medium text-center font-poppin">All rights reserved @2024 erotas.in</h1>
    </>
  )
}

export default Footer