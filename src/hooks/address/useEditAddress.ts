'use client'
import { useEditAddressMutation } from "@/redux/slice/address"
import useApiResult from "@/hooks/useApiResult"
import useLoading from "@/hooks/useLoading"
import useUser from "@/hooks/user/useUser"
import { AddressType } from "@/redux/types"

const useEditAddress = () => {

    const { userId } = useUser();
    const setLoading = useLoading();
    const check_status = useApiResult();
    const editAddressHook = useEditAddressMutation();
 
    const editAddress = async (address: AddressType, addressId: string) => {
        var res: any = await editAddressHook[0]({ userId, address, addressId });
        var status = check_status(res.data.status);
        return status
    }

    return editAddress

}

export default useEditAddress;