'use client'

import React from 'react'
import { setIsLoading } from '@/redux/slice/general/index'
import { useAppDispatch } from '@/redux/hooks'

const useLoading = () => {

    const [isLoading, setLoading] = React.useState(false)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(setIsLoading(isLoading));
    }, [isLoading])


    return setLoading
}

export default useLoading