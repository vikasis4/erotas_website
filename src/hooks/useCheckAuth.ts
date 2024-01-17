'use client'
import useGeneral from '@/hooks/useGeneral'

const useCheckAuth = () => {

    const checkAuth = () => {
        var { isAuthenticated } = useGeneral();
        if (!isAuthenticated) {
            alert('Not Auntheticated');
            return false
        } else {
            return true
        }
    }

    return checkAuth

}

export default useCheckAuth