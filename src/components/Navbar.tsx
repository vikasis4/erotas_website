'use client'

import React from 'react'
import { useRouter } from 'next/navigation'


function Navbar() {

  const router = useRouter()

  return (
    <div className="flex justify-center items-center w-full h-24 bg-[#F5F5F5]">
      <h1
        className="w-full text-center hover:cursor-pointer">Element Space</h1>
      <h1
        onClick={() => router.push('/')}
        className="w-full text-center hover:cursor-pointer">Logo Space</h1>
      <h1
        onClick={() => router.push('/auth')}
        className="w-full text-center hover:cursor-pointer">Auth Space</h1>
    </div>
  )
}

export default Navbar