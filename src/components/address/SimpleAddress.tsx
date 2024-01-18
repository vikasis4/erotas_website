import React from 'react'
import { AddressType } from '@/redux/types'
import AddressCol from '@/ui/AddressCol';

function SimpleAddress({ data }: { data: AddressType }) {

    const { address, pincode, city, state, landMark, phone, _id } = data;

    return (
        <div className="flex bg-red-100 relative flex-wrap w-[90%] m-auto lg:w-1/2 font-poppin gap-4 shadow-md rounded-md p-4">
            <AddressCol name="Address" title={address} />
            <AddressCol name="Phone" title={phone} />
            <AddressCol name="PinCode" title={pincode} />
            <AddressCol name="City" title={city} />
            <AddressCol name="State" title={state} />
            <AddressCol name="LandMark" title={landMark} />
        </div>
    )
}

export default SimpleAddress