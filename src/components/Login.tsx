import React from "react";
import axios from "axios";
import { signInApi } from '@/config/apis';
import ValidateEmail from '@/utils/emailCheck'


export default function Login({ state, setState, redux }: any) {

    const handleSubmit = async () => {
        var res = ValidateEmail(state.email);
        if (!res) {
            alert('Email is not valid');
            return
        }
        redux.dispatch(redux.setIsLoading(true))
        await axios.post(signInApi, { email: state.email }).then((response: any) => {
            if (response.data.status === 'true') {
                setState({ ...state, status: 'otp' })
            } else if (response.data.status === 'nouser') {
                alert('No user found')
            } else {
                alert('Something went wrong')
            }
        })
        redux.dispatch(redux.setIsLoading(false))
    }

    return (
        <>
            <input
                type="text"
                title="name"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                placeholder="Enter Your Email"
                className='outline-none p-2 rounded mb-4'
            />
            <button
                onClick={handleSubmit}
                className='mt-10 font-bold bg-red-600 text-white rounded py-2'>
                Submit
            </button>
            <h1 className="pt-4 text-sm text-bold font-poppin" >Don't have an account ?</h1>
            <h1
                onClick={() => setState({ ...state, status: 'register' })}
                className="hover:cursor-pointer text-sm text-bold font-poppin text-green-600">Register here</h1>
        </>
    )
}