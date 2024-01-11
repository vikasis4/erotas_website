import { setIsAuthenticated } from '@/redux/slice/general/index';


export const handleLogOut = ({dispatch, router}:any) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('JWT_token')
    };
    dispatch(setIsAuthenticated(false));
    router.refresh();   
    router.push('/') 
}