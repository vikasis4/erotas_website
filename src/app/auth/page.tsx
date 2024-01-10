"use client"

import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation'
const otpVerifyApi = 'http://localhost:3001/api/auth/otp/verify';
const otpGenerateApi = 'http://localhost:3001/api/auth/otp/generate';
const signUpApi = 'http://localhost:3001/api/auth/register';
const signInApi = '';

function Register({ setState }: any) {

    const [form, setForm] = React.useState({
        email: '',
        name: ''
    })
    const handleSubmit = async () => {
        await axios.post(signUpApi, form).then((response) => {
            if (response.data.status === 'true') {
                alert('Account created successfully');
                setState({ email: form.email, status: 'otp' })
            } else if (response.data.status === 'user') {
                alert('Account with this Email already exsists');
            } else {
                alert('Something went wrong, please try again later');
            }
            setForm({ name: '', email: '' })
        })
    }

    return (
        <>
            <input
                type="text"
                title="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter Your Name"
                className='outline-none p-2 rounded mb-4'
            />
            <input
                type="email"
                title="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter Your Email"
                className='outline-none p-2 rounded'
            />
            <button
                onClick={handleSubmit}
                className='mt-10 font-bold bg-red-800 text-white rounded py-2'>
                Submit
            </button>
        </>
    )
}
function Otp({ state, router }: any) {

    const [otp, setOtp] = React.useState<any>();
    const handleSubmit = async () => {
        await axios.post(otpVerifyApi, { otp, email: state.email }).then(response => {
            if (response.data.status === 'true') {
                localStorage.setItem('JWT_token', response.data.token);
                router.push('/')
            } else if (response.data.status === 'false') {
                alert('Wrong OTP')
            } else {
                alert('Sometihng went wrong, please try again later')
            }
        })
    }

    return (
        <>
            <input
                type="number"
                title="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter Your 4-digit OTP"
                className='outline-none p-2 rounded mb-4'
            />
            <button
                onClick={handleSubmit}
                className='mt-10 font-bold bg-red-700 text-white rounded py-2'>
                Submit
            </button>
        </>
    )
}
function Login({ setState }: any) {
    return (
        <>
            <input
                type="text"
                title="name"
                // value={form.name}
                // onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter Your Name"
                className='outline-none p-2 rounded mb-4'
            />
            <button
                // onClick={handleSubmit}
                className='mt-10 font-bold bg-blue-700 text-white rounded py-2'>
                Submit
            </button>
        </>
    )
}

function page() {


    const [state, setState] = React.useState({
        email: '',
        status: 'register'
    })
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center h-full bg-red-100">
            <h1 className="text-3xl">Becoma a Member</h1>
            <div className="mt-12 flex flex-col">
                {
                    state.status === 'register' ? <Register setState={setState} /> :
                        state.status === 'otp' ? <Otp router={router} state={state} setState={setState} />
                            : <Login setState={setState} />
                }
            </div>
        </div>
    )
}

export default page