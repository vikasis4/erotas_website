'use client'
import { useGetCartQuery } from '@/redux/slice/cart'
import useLoading from "@/hooks/useLoading";
import useApiResult from "@/hooks/useApiResult";
import useUser from '@/hooks/useUser'
import React from 'react';

const useCart = () => {

    var { userId } = useUser()
    const setLoading = useLoading()
    var validStatus = useApiResult();
    const { data, isLoading } = useGetCartQuery(userId);

    React.useEffect(() => {
        setLoading(isLoading)
    }, [isLoading])

    var result = validStatus(data?.status);

    if (data && result) {
        return data.cart
    } else {
        return []
    }
}

export default useCart;