'use client'
import React from 'react';
import { useGetAddressQuery } from '@/redux/slice/address/index'
import useUser from '@/hooks/user/useUser'
import useLoading from "@/hooks/useLoading";
import useApiResult from "@/hooks/useApiResult";

const useGetAddress = () => {

    const { userId } = useUser();    

    const setLoading = useLoading()
    var validStatus = useApiResult();

    const { isLoading, data } = useGetAddressQuery(userId);
    var result = validStatus(data?.status);    

    React.useEffect(()=>{
        setLoading(isLoading);
    },[isLoading])

    if (data && result) {
        return data.address
    } else {
        return []
    }

}

export default useGetAddress;