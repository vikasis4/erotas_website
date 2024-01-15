import React from "react";
import axios from "axios";
import { signUpApi } from '@/config/apis';
import ValidateEmail from '@/utils/emailCheck'


export default function Register({ setState, state, redux }: any) {

    const [form, setForm] = React.useState({
        email: '',
        name: ''
    })

    const handleSubmit = async () => {

        var res = ValidateEmail(form.email);
        if (!res) {
            alert('Email is not valid');
            return
        } if (form.name.length === 0) {
            alert('Name field cannot be empty');
            return
        }
        redux.dispatch(redux.setIsLoading(true))
        await axios.post(signUpApi, form).then((response) => {
            if (response.data.status === 'true') {
                setState({ email: form.email, status: 'otp' })
            } else if (response.data.status === 'user') {
                alert('Account with this Email already exsists');
            } else {
                alert('Something went wrong, please try again later');
            }
            setForm({ name: '', email: '' })
        })
        redux.dispatch(redux.setIsLoading(false))
    }

    return (
        <>
            <input
                type="text"
                title="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter Your Name"
                className='shadow-md outline-none p-4 font-medium rounded mb-4 font-poppin'
            />
            <input
                required
                type="email"
                title="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter Your Email"
                className='shadow-md outline-none p-4 font-medium rounded font-poppin'
            />
            <button
                onClick={handleSubmit}
                className='mt-10 font-poppin text-2xl shadow-md font-bold bg-red-600 text-white rounded py-4'>
                Submit
            </button>
            <h1 className="mt-8 text-md font-semibold font-poppin" >Already have an account ?</h1>
            <h1
                onClick={() => setState({ ...state, status: 'login' })}
                className="hover:cursor-pointer text-md text-bold font-poppin font-semibold text-green-700">Login here</h1>
        </>
    )
}