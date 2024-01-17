'use client'
import useGeneral from '@/hooks/useGeneral'

const useCheckAuth = () => {
    var { isAuthenticated } = useGeneral();
    if (!isAuthenticated) {
        alert('Login');
        return false
    } else {
        return true
    }
}

export default useCheckAuth