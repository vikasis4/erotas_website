'use client'
import React from 'react'
import { handleLogOut } from '@/utils/logout'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useRouter } from 'next/navigation'


function page() {

    // const router = useRouter();
    // const state = useAppSelector((state:any) => state.general.isAuthenticated)
    // const dispatch = useAppDispatch();
    // if (!state) {
    //     router.push('/')
    // }

    return (
        <div className="flex h-full  justify-center items-center">
            {/* <button
                onClick={() => handleLogOut({ dispatch, router })}
                className='font-poppin text-bold text-white bg-red-600 py-6 px-12 rounded text-3xl shadow-xl'>Logout</button> */}
        </div>
    )
}

export default page