'use client'
import CreateAddress from '@/components/CreateAddress'
import React from 'react'

function page() {

  return (
    <div className="my-16 flex-col px-12 font-poppin flex justify-center items-center gap-4">
      <button className="bg-red-600 px-8 py-2 font-medium text-white rounded-md shadow-md">+ Add New Address</button>
      <CreateAddress />
    </div>
  )
}

export default page