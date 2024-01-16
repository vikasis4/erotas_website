'use client'

import React from 'react'
import { setIsLoading, setUserInfo, setCart } from '@/redux/slice/general/index'
import { useFetchUserQuery } from '@/redux/slice/user/index'
import { getJWTtoken } from '../utils/getJWTtoken'
import { useAppDispatch } from '@/redux/hooks'
import { useGetCartQuery } from '@/redux/slice/cart'

function Initialize() {

    const dispatch = useAppDispatch()
    const token = getJWTtoken()
    const user = useFetchUserQuery(token);
    const cart = useGetCartQuery(user.data?.data._id);


    React.useEffect(() => {        
        if (cart.data?.status === 'true') {
            dispatch(setCart(cart.data?.cart))
        } else if (user.data?.status === 'error') {
            alert('Something went wrong while signing in, logout and signIn')
        }
    }, [cart.status])

    React.useEffect(() => {
        dispatch(setIsLoading(user.isLoading));
        if (user.data?.status === 'true') {
            dispatch(setUserInfo(user.data?.data))
        } else if (user.data?.status === 'error') {
            alert('Something went wrong while signing in, logout and signIn')
        }
    }, [user.isLoading]);


    return (
        <>
        </>
    )
}

export default Initialize