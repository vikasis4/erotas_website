'use client'
import React from 'react'
import { setLogOut } from '@/redux/slice/general'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useRouter } from 'next/navigation'


function page() {

    const router = useRouter();
    const state = useAppSelector((state: any) => state.general.isAuthenticated)
    const dispatch = useAppDispatch();
    if (!state) {
        router.push('/')
    }
    const handleLogOut = () => {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('JWT_token')
        };
        dispatch(setLogOut());
        router.refresh();
        router.push('/');
    }

    return (
        <div className="flex h-full  justify-center items-center">
            <button
                onClick={() => handleLogOut()}
                className='font-poppin text-bold text-white bg-red-600 py-6 px-12 rounded text-3xl shadow-xl'>Logout</button>
        </div>
    )
}

export default page