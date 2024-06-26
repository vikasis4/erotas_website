import { GoogleLogin, } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useToast } from '../ui/use-toast';
import { setIsLoading } from '@/redux/slice/general/index'
import { useAppDispatch } from '@/redux/hooks';
import { googleAuth } from '@/config/apis';
import axios from 'axios'

function Google() {

    const { toast } = useToast();
    const dispatch = useAppDispatch();

    const handleSuccess = async (credentialResponse: any) => {

        const decoded = jwtDecode<any>(credentialResponse.credential);


        dispatch(setIsLoading(true))
        await axios.post(googleAuth, { email: decoded.email, name: decoded.name }).then((response: any) => {
            if (response.data.status === 'true') {
                localStorage.setItem('JWT_token', response.data.token);
                location.reload()
            } else {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "Something went wrong",
                })
            }
        })
        dispatch(setIsLoading(false))
    };

    const handleError = () => {
        toast({
            variant: "destructive",
            title: "Warning",
            description: "Authentication Failed",
        })
    };

    return (
        <GoogleLogin
            text="continue_with"
            size="large"
            onSuccess={handleSuccess}
            onError={handleError}
        />
    );
}

export default Google