'use client'
import useCheckAuth from '@/hooks/useCheckAuth';
import { useAddToCartMutation } from '@/redux/slice/cart';
import useLoading from "@/hooks/useLoading";
import useApiResult from "@/hooks/useApiResult";
import useUser from '@/hooks/useUser'

const useAddTocart = () => {

    var { userId } = useUser()
    var auth_check = useCheckAuth();
    const setLoading = useLoading();
    var validStatus = useApiResult();
    const addCart = useAddToCartMutation();


    const addToCart = async (productId: string) => {
        if (!auth_check) { return }
        setLoading(true)
        var res: any = await addCart[0]({ userId, productId });
        setLoading(false)
        validStatus(res.data.status)
    }
    return addToCart 
}

export default useAddTocart