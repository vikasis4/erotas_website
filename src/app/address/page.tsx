'use client'
import CreateAddress from '@/components/CreateAddress'
import React from 'react'
import useGetAddress from '@/hooks/address/useGetAddress'

function page() {

  const address = useGetAddress();
  const [createAddress, setCreateAddress] = React.useState(false);


  return (
    <>{
      createAddress ?
        <CreateAddress setCreateAddress={setCreateAddress} />
        :
        <div className="my-16 flex-col px-12 font-poppin flex justify-center items-center gap-4">
          <button onClick={() => setCreateAddress(true)} className="bg-red-600 px-8 py-2 font-medium text-white rounded-md shadow-md">+ Add New Address</button>
          {
            address.length === 0 ?
              <h1 className="my-12">No Address is saved</h1> :
              null
          }
        </div>
    }
    </>
  )
}

export default page