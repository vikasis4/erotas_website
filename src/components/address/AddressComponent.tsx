import { AddressType } from '@/redux/types'
import AddressCol from '@/ui/AddressCol';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import useDeleteAddress from '@/hooks/address/useDeleteAddress'
import CreateEditAddress from '@/components/address/CreateEditAddress'
import { edit, delet } from '@/config/images';

function AddressComponent({ data }: { data: AddressType }) {

    const router = useRouter();
    const deleteAddress = useDeleteAddress()
    const [showConfig, setShowConfig] = React.useState(false);
    const { address, pincode, city, state, landMark, phone, _id } = data;

    return (
        <>
            {
                showConfig ?
                    <CreateEditAddress setShowConfig={setShowConfig} data={data} /> :

                    <div className="flex bg-red-100 relative flex-wrap w-full lg:w-1/2 font-poppin gap-4 shadow-md rounded-md p-4">
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