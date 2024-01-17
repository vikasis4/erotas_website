import useCheckAuth from '@/hooks/useCheckAuth';
import { useRemoveFromcartMutation } from '@/redux/slice/cart';
import useLoading from "@/hooks/useLoading";
import useApiResult from "@/hooks/useApiResult";
import useUser from '@/hooks/useUser'

const useRemoveFromCart = () => {

    var { userId } = useUser()
    const setLoading = useLoading()
    var auth_check = useCheckAuth();
    var validStatus = useApiResult();
    const removeCart = useRemoveFromcartMutation();

    
    const removeFromCart = async (productId: string) => {
        if (!auth_check) { return }
        setLoading(true)
        var res: any = await removeCart[0]({ userId, productId })
        setLoading(false)
        validStatus(res.data.status)
    }

    return removeFromCart
}

export default useRemoveFromCart