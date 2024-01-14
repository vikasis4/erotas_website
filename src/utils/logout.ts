import { setLogOut } from '@/redux/slice/general/index';


export const handleLogOut = ({dispatch, router}:any) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('JWT_token')
    };
    dispatch(setLogOut());
    router.refresh();   
    router.push('/');    
}