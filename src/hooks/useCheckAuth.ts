'use client'
import useGeneral from '@/hooks/general/useGeneral'

const useCheckAuth = () => {

    var { isAuthenticated } = useGeneral();
    const checkAuth = () => {
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