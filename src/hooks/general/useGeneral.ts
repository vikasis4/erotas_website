'use client'
import { useAppSelector } from '@/redux/hooks'

const useGeneral = () => {
    const { isLoading, isAuthenticated, addressId } = useAppSelector((state) => state.general);

    return { isLoading, isAuthenticated, addressId }
}

export default useGeneral;