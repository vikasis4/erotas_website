'use client'

import useUser from "@/hooks/user/useUser"
import useApiResult from "@/hooks/useApiResult"
import useLoading from "@/hooks/useLoading"
import { useDeleteAddressMutation } from "@/redux/slice/address"

const useDeleteAddress = () => {

    const { userId } = useUser();
    const setLoading = useLoading();
    const check_status = useApiResult();
    const deleteAddressApi = useDeleteAddressMutation()

    const deleteAddress = async (addressId: string) => {
        setLoading(true)
        var res: any = await deleteAddressApi[0]({ addressId, userId })
        setLoading(false)
        check_status(res.data.status)
    }

    return deleteAddress;
}

export default useDeleteAddress;