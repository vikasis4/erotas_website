'use client'
import React from 'react'
import AddressComponent from '@/components/address/AddressComponent'
import useGetAddress from '@/hooks/address/useGetAddress'
import CreateEditAddress from '@/components/address/CreateEditAddress'
import useGeneral from '@/hooks/general/useGeneral';

function SelectAddress({ setAddressSelected }: any) {

  const address = useGetAddress();
  const { addressId } = useGeneral();
  const [showConfig, setShowConfig] = React.useState(false);

  const handleClick = () => {
    if (addressId === 'false') {
      alert('Please select an address');
      return
    }
    setAddressSelected(true)
  }


  return (
    <>
      <h1 className="font-poppin  font-semibold text-center py-4 text-xl">Select Address for delivery</h1>
      {
        showConfig ?
          <CreateEditAddress setShowConfig={setShowConfig} data={null} />
          :
          <div className="my-8 flex-col px-12 font-poppin flex justify-center items-center gap-6">
            {
              address.length === 0 ?
                <h1 className="my-12">No Address is saved</h1>
                :
                address.map((data, index) => (<AddressComponent key={index} data={data} />))
            }
            <button onClick={handleClick} className="bg-red-600 mt-8 w-full lg:w-1/2 px-8 py-2 font-medium text-white rounded-md shadow-md">
              Continue
            </button>
            <button onClick={() => setShowConfig(true)} className="bg-red-600 w-full lg:w-1/2 px-8 py-2 font-medium text-white rounded-md shadow-md">+ Add New Address</button>
          </div>
      }
    </>
  )
}

export default SelectAddress