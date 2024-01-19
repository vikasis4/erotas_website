'use client'
import CreateEditAddress from '@/components/address/CreateEditAddress'
import React from 'react'
import useGetAddress from '@/hooks/address/useGetAddress'
import AddressComponent from '@/components/address/AddressComponent';

function page() {

  const address = useGetAddress();
  const [showConfig, setShowConfig] = React.useState(false);

 
  return (
    <>{
      showConfig ?
        <CreateEditAddress setShowConfig={setShowConfig} data={null} />
        :
        <div className="my-16 flex-col px-12 font-poppin flex justify-center items-center gap-6">
          <button onClick={() => setShowConfig(true)} className="bg-red-600 px-8 py-2 font-medium text-white rounded-md shadow-md">+ Add New Address</button>
          {
            address.length === 0 ?
              <h1 className="my-12">No Address is saved</h1>
              :
              address.map((data, index) => (<AddressComponent key={index} data={data} />))
          }
        </div>
    }
    </>
  )
}

export default page