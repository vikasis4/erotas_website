'use client'
import { useAppSelector } from '@/redux/hooks'

const useGeneral = () => {
    const { isLoading, isAuthenticated, delivery_address } = useAppSelector((state) => state.general);

    return { isLoading, isAuthenticated, delivery_address }
}

export default useGeneral;