"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import Register from '@/components/auth/Register';
import Otp from '@/components/auth/Otp';
import Login from '@/components/auth/Login'
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setIsLoading } from '@/redux/slice/general/index'


function page() {

    const [state, setState] = React.useState({
        email: '',
        status: 'register'
    })
    const router = useRouter();
    const dispatch = useAppDispatch();
    const general = useAppSelector((state) => state.general.isAuthenticated);
    if (general) {
        router.push('/')
    }

    return (
        <div className="my-24 flex flex-col justify-center items-center">
            <h1 className="mb-12 text-4xl font-playfair">{state.status === 'login' ? 'LogIn' : state.status === 'otp' ? 'OTP' : 'Create Account'}</h1>
            <div className="flex flex-col lg:w-[50%]">
                {
                    state.status === 'register' ?
                        <Register redux={{ dispatch, setIsLoading }} setState={setState} state={state} />
                        : state.status === 'otp' ?
                            <Otp redux={{ dispatch, setIsLoading }} router={router} state={state} setState={setState} />
                            :
                            <Login redux={{ dispatch, setIsLoading }} state={state} setState={setState} />
                }
            </div>
        </div>
    )
}

export default page