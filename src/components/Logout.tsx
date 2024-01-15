import React from 'react'
import { setLogOut } from '@/redux/slice/general'
import { useAppDispatch } from "@/redux/hooks"
import { useRouter } from 'next/navigation'


function Logout() {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('JWT_token')
        };
        dispatch(setLogOut());
        router.refresh();
        router.push('/');
    }

    return (
        <button
            onClick={() => handleLogOut()}
            className='font-semibold bg-red-600 rounded-md px-8 py-2 text-white shadow-lg'>Logout</button>)
}

export default Logout