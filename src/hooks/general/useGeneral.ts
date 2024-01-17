'use client'
import { useAppSelector } from '@/redux/hooks'

const useGeneral = () => {
    const { isLoading, isAuthenticated } = useAppSelector((state) => state.general);

    return { isLoading, isAuthenticated }
}

export default useGeneral;