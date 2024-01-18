import { AddressType } from '@/redux/types'
import AddressCol from '@/ui/AddressCol';
import Image from 'next/image';
import React from 'react'
import useDeleteAddress from '@/hooks/address/useDeleteAddress'
import CreateEditAddress from '@/components/address/CreateEditAddress'
import { edit, delet } from '@/config/images';
import useAddressId from '@/hooks/useAddressId'
import useGeneral from '@/hooks/general/useGeneral';

function AddressComponent({ data }: { data: AddressType }) {

    const deleteAddress = useDeleteAddress();
    const { addressId } = useGeneral()
    const setAddressId = useAddressId();
    const [showConfig, setShowConfig] = React.useState(false);
    const { address, pincode, city, state, landMark, phone, _id } = data;

    return (
        <>
            {
                showConfig ?
                    <CreateEditAddress setShowConfig={setShowConfig} data={data} /> :

                    <div className="flex bg-red-100 relative flex-wrap w-full lg:w-1/2 font-poppin gap-4 shadow-md rounded-md p-4">
                        <h1 onClick={() => setAddressId(_id)} className="lg:hoevr:cursor-pointer flex justify-center items-center absolute top-3 left-3 h-6 w-6 border-red-600 border-2 rounded-full">
                            {
                                addressId === _id ?
                                    <h1 className="h-4 w-4 bg-red-600  rounded-full"></h1>
                                    :
                                    null
                            }
                        </h1>
                        <div className="absolute top-1 right-1 flex gap-2 p-2">
                            <Image onClick={() => setShowConfig(true)} className="lg:hover:cursor-pointer" src={edit} alt="erota" height="25" width="25" />
                            <Image onClick={() => deleteAddress(_id)} className="lg:hover:cursor-pointer" src={delet} alt="erota" height="25" width="25" />
                        </div>
                        <div className="w-full h-4"></div>
                        <AddressCol name="Address" title={address} />
                        <AddressCol name="Phone" title={phone} />
                        <AddressCol name="PinCode" title={pincode} />
                        <AddressCol name="City" title={city} />
                        <AddressCol name="State" title={state} />
                        <AddressCol name="LandMark" title={landMark} />
                    </div>
            }
        </>
    )
}

export default AddressComponent