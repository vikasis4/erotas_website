'use client'
import { useAppDispatch } from "@/redux/hooks";
import { setIsAuthenticated } from '@/redux/slice/general/index'

const useSetAuth = () => {

    const dispatch = useAppDispatch()

    const setAuht = (value: boolean) => {
        dispatch(setIsAuthenticated(value))
    }

    return setAuht
}

export default useSetAuth