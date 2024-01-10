'use client'

import React from 'react'
import axios from 'axios';
const signUpApi = 'http://localhost:3001/api/auth/register';
const signInApi = '';


function page() {

    const [email, setEmail] = React.useState('')

    const handleSubmit = () => {
        axios.post(signUpApi, { email }).then((response) => {
            if (response.data.success) {
                console.log(response);
            }
        })
    }

    return (
        <div className="flex flex-col justify-center items-center h-full bg-red-200">
            <h1 className="text-3xl">Becoma a Member</h1>
            <div className="mt-12 flex flex-col">
                <input
                    type="email"
                    title="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className='outline-none p-2 rounded'
                />
                <button
                    onClick={handleSubmit}
                    className='mt-10 font-bold bg-blue-700 text-white rounded py-2'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default page