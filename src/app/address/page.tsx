'use client'
import React from 'react'
import useGetAddress from '@/hooks/address/useGetAddress'
import AddressComponent from '@/components/address/AddressComponent';
import { Button } from '@/components/ui/button';
import AddressAlert from '@/components/alerts/AddressAlert'

function page() {

  const address = useGetAddress();


  return (
    <>
      <div className="my-8 flex-col px-6 font-poppin flex justify-center items-center gap-6">
        <AddressAlert component={<Button>+ Add New Address</Button>} />
        {
          address.length === 0 ?
            <h1 className="my-12">No Address is saved</h1>
            :
            address.map((data, index) => (<AddressComponent key={index} data={data} />))
        }
      </div>
    </>
  )
}

export default page