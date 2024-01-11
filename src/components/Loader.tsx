'use client'
import Image from 'next/image'
import React from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { setIsLoading, setIsAuthenticated } from '@/redux/slice/general/index'
import { useFetchUserQuery } from '@/redux/slice/user/index'
import { getJWTtoken } from '../utils/getJWTtoken'

function Loader() {

    const loading = useAppSelector((state) => state.general.isLoading)
    const dispatch = useAppDispatch()

    const token = getJWTtoken()
    const { data, isLoading } = useFetchUserQuery(token);
    
    React.useEffect(()=>{
        dispatch(setIsLoading(isLoading));
        if (data?.status === 'true') {
            dispatch(setIsAuthenticated(true))
        }
    },[isLoading])



    return (
        <>
            {
                loading ?
                    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-70">
                        <Image src={require('../assets/image/loader.gif')} alt="Loading..." height={120} width={120} className='rounded-md' />
                    </div>
                    :
                    <div className='hidden'>
                        <Image src={require('../assets/image/loader.gif')} alt="Loading..." height={0} width={0} className='hidden' />
                    </div>
            }
        </>
    )
}

export default Loader