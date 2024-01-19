'use client'

import React from 'react'
import useLoading from "@/hooks/useLoading"
import useApiResult from "@/hooks/useApiResult"
import { useAddSupportMutation } from "@/redux/slice/suport/api"
import useUser from '@/hooks/user/useUser'

const useAddSupport = () => {

    const setLoading = useLoading();
    const check_status = useApiResult();
    const { userId } = useUser();
    const addSupportHook = useAddSupportMutation();

    const addSupport = async (phone: number) => {
        setLoading(true)
        var res: any = await addSupportHook[0]({ userId, phone })
        setLoading(false)
        check_status(res.data.status)
    }

    return addSupport
}

export default useAddSupport