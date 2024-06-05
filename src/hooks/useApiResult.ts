'use client'
import { useToast } from "@/components/ui/use-toast";

const useApiResult = () => {

    const {toast} = useToast()

    const validStatus = (status: string | undefined) => {
        switch (status) {
            case 'true':
                return true;
            case 'empty':
                return false;
            case 'error':
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "Something went wrong",
                })
                return false;
            default:
                return false
        }
    }

    return validStatus
}

export default useApiResult