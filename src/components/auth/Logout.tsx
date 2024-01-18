import React from 'react'
import { useRouter } from 'next/navigation'
import useSetAuth from '@/hooks/useSetAuth';

function Logout() {

    const router = useRouter();
    const setAuht = useSetAuth();

    const handleLogOut = () => {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('JWT_token')
        };
        setAuht(false)
        router.refresh();
        router.push('/');
    }

    return (
        <button
            onClick={() => handleLogOut()}
            className='font-semibold bg-red-600 rounded-md px-8 py-2 text-white shadow-lg'>Logout</button>)
}

export default Logout