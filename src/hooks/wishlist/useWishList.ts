'use client'
import React from 'react';
import { useFetchWishListQuery, useAddToWishListMutation, useRemoveFromWishListMutation } from '@/redux/slice/wishlist/index'
import useLoading from "@/hooks/useLoading";
import useApiResult from "@/hooks/useApiResult";
import useUser from '@/hooks/user/useUser'
import useCheckAuth from '@/hooks/useCheckAuth';


const useWishList = () => {

    var { userId } = useUser()
    const setLoading = useLoading()
    var validStatus = useApiResult();
    const addToWishListHook = useAddToWishListMutation();
    const removeFromWishListHook = useRemoveFromWishListMutation();
    var checkAuth = useCheckAuth();

    const getWishList = () => {
        const { data, isLoading, isFetching } = useFetchWishListQuery(userId);
        React.useEffect(() => {
            setLoading(isLoading)
        }, [isLoading])
        var result = validStatus(data?.status);
        if (data && result) {
            return data.wishList
        } else {
            return []
        }
    }

    const addToWishList = async (productId: string) => {
        var auth_check = checkAuth()
        if (!auth_check) { return }
        setLoading(true);
        var res: any = await addToWishListHook[0]({ userId, productId })
        setLoading(false);
        var result = validStatus(res.data.status);
        return result;
    }

    const removeFromWishList = async (productId: string) => {
        var auth_check = checkAuth()
        if (!auth_check) { return }
        setLoading(true);
        var res: any = await removeFromWishListHook[0]({ userId, productId })
        setLoading(false);
        var result = validStatus(res.data.status);
        return result;
    }

    return { getWishList, addToWishList, removeFromWishList }

}

export default useWishList;