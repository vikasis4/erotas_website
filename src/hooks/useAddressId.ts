'use client'

import { useAppDispatch } from "@/redux/hooks"
import { setDeliveryId } from '@/redux/slice/general/index'

const useAddressId = () => {

    const dispatch = useAppDispatch();

    const setAddressId = (id: string) => {
        dispatch(setDeliveryId(id))
    }

    return setAddressId

}

export default useAddressId