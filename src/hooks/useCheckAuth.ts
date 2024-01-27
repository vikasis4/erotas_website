'use client'
import useGeneral from '@/hooks/general/useGeneral'
import { useToast } from '@/components/ui/use-toast';

const useCheckAuth = () => {

    var { isAuthenticated } = useGeneral();
    const {toast} = useToast();

    const checkAuth = () => {
        if (!isAuthenticated) {
            toast({
                variant: "destructive",
                title: "Warning",
                description: "Please Login to proceed with this action",
            })
            return false
        } else {
            return true
        }
    }

    return checkAuth

}

export default useCheckAuth