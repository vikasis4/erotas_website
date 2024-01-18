'use client'
import { useAddAddressMutation } from "@/redux/slice/address"
import useApiResult from "@/hooks/useApiResult"
import useLoading from "@/hooks/useLoading"
import useUser from "@/hooks/user/useUser"
import { AddressType } from "@/redux/types"

const useAddAddress = () => {

    const { userId } = useUser();
    const setLoading = useLoading();
    const check_status = useApiResult();
    const addAddressHook = useAddAddressMutation();
 
    const addAddress = async (address: AddressType) => {
        var res: any = await addAddressHook[0]({ userId, address });
        var status = check_status(res.data.status);
        return status
    }

    return addAddress

}

export default useAddAddress;