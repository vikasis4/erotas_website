'use client'
import { useFetchProductsQuery } from '@/redux/slice/products/index'
import useApiResult from "@/hooks/useApiResult";

const useProducts = () => {

    const { isLoading, data } = useFetchProductsQuery('');
    var validStatus = useApiResult();

    
    var result = validStatus(data?.status);
    if (data && result) {
        return { isLoading, products: data.product }
    } else {
        return { isLoading, products: [] }
    }

} 

export default useProducts;