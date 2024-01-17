'use client'
import React from "react";
import { useFetchUserQuery } from '@/redux/slice/user/index'
import { getJWTtoken } from '@/utils/getJWTtoken'
import useLoading from "@/hooks/useLoading";
import useApiResult from "@/hooks/useApiResult";

const useUser = () => {

    const token = getJWTtoken()
    const setLoading = useLoading()
    const { data, isLoading } = useFetchUserQuery(token);
    var result = useApiResult(data?.status);

    React.useEffect(() => {
        setLoading(isLoading)
    }, [isLoading])

    if (data && result) {
        return { name: data.info.name, email: data.info.email, userId: data.info._id }
    } else {
        return { name: '', email: '', userId: '' }
    }

}

export default useUser