'use client'
import React from 'react'
import AddressComponent from '@/components/address/AddressComponent'
import useGetAddress from '@/hooks/address/useGetAddress'
import AddressAlert from '@/components/alerts/AddressAlert'
import useGeneral from '@/hooks/general/useGeneral';
import { Button } from '../ui/button'
import { useToast } from "@/components/ui/use-toast"

function SelectAddress({ setAddressSelected }: any) {

  const address = useGetAddress();
  const { addressId } = useGeneral();
  const { toast } = useToast()


  const handleClick = () => {
    if (addressId === 'false') {
      toast({
        variant: "destructive",
        title: "Warning",
        description: "Please select an address",
    })
      return
    }
    setAddressSelected(true)
  }


  return (
    <>
      <h1 className="font-playfair  font-semibold text-center py-4 text-xl">Select Address for delivery</h1>
          
          <div className="my-8 flex-col px-6 font-poppin flex justify-center items-center gap-6">
            {
              address.length === 0 ?
                <h1 className="my-12">No Address is saved</h1>
                :
                address.map((data, index) => (<AddressComponent key={index} data={data} />))
            }
            <Button className="w-full mt-12" onClick={handleClick} size="lg">
              Continue
            </Button>
            <AddressAlert component={<Button className="w-full">+ Add New Address</Button>} />
          </div>
      
    </>
  )
}

export default SelectAddress