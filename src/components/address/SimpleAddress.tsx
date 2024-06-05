import React from 'react'
import { AddressType } from '@/redux/types'
import AddressCol from '@/ui/AddressCol';

function SimpleAddress({ data }: { data: AddressType }) {

    const { address, pincode, city, state, landMark, phone, _id } = data;
    var style = _id === 'yo' ?
        "flex relative flex-wrap bg-red-100 m-auto w-[95%] font-poppin gap-2 rounded-md p-1"
        :
        "flex bg-primary relative bg-red-100 flex-wrap m-auto w-[90%] font-poppin gap-4 shadow-md rounded-md p-4"

    return (
        <div className={style}>
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