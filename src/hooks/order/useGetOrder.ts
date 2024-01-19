'use client'
import React from "react"
import { useFetchOrderQuery } from "@/redux/slice/order/api"
import useUser from "@/hooks/user/useUser"
import useApiResult from "@/hooks/useApiResult"
import useLoading from "@/hooks/useLoading"

const useGetOrder = () => {

    const { userId } = useUser();
    const check_status = useApiResult();
    const setLoading = useLoading();
    const { isLoading, isFetching, data } = useFetchOrderQuery(userId);

    React.useEffect(() => {
        setLoading(isLoading)
    }, [isFetching])

    if (data) {
        check_status(data.status)
        return data.orders
    }else{
        return []
    }
}

export default useGetOrder;
