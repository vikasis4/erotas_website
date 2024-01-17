'use client'
import React from 'react';
import { useFetchProductQuery } from '@/redux/slice/products/index'
import useApiResult from "@/hooks/useApiResult";
import useLoading from "@/hooks/useLoading";

const useGetProduct = () => {

    var validStatus = useApiResult();
    const setLoading = useLoading();


    const getProduct = (productId: string | string[]) => {

        const { isLoading, data } = useFetchProductQuery(productId);
        React.useEffect(()=>{
            setLoading(isLoading);
        },[isLoading])

        var result = validStatus(data?.status);
        if (data && result) {
            return data.product
        }
    }

    return getProduct;

}

export default useGetProduct;