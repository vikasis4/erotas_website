'use client'

import React from 'react'
import useLoading from "@/hooks/useLoading"
import useApiResult from "@/hooks/useApiResult"
import { useGetSupportQuery } from "@/redux/slice/suport/api"
import useUser from '@/hooks/user/useUser'

const useGetSupport = () => {

    const setLoading = useLoading();
    const check_status = useApiResult();
    const { userId } = useUser();
    const { isLoading, data, isFetching } = useGetSupportQuery(userId);

    React.useEffect(()=>{
        setLoading(isLoading)
    },[isFetching])

    if (data) {
        check_status(data.status)
        return data.support
    }else{
        return null
    }
}

export default useGetSupport