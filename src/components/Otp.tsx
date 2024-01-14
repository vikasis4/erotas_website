import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { otpVerifyApi, otpGenerateApi } from '@/config/apis';
import Timer from "./Timer";

export default function Otp({ state, redux }: any) {

    const [otp, setOtp] = React.useState<any>();
    const [count, setCount] = React.useState(40);
    const router = useRouter();


    const handleSubmit = async () => {
        redux.dispatch(redux.setIsLoading(true))
        await axios.post(otpVerifyApi, { otp, email: state.email }).then(response => {
            if (response.data.status === 'true') {
                localStorage.setItem('JWT_token', response.data.token);
                router.refresh();
                router.push('/');
                alert('Reload Your page to Login In')
            } else if (response.data.status === 'false') {
                alert('Wrong OTP')
            } else {
                alert('Sometihng went wrong, please try again later')
            }
        })
        redux.dispatch(redux.setIsLoading(false))
    }

    const handleResend = async () => {
        redux.dispatch(redux.setIsLoading(true))
        await axios.post(otpGenerateApi, { email: state.email }).then((response: any) => {
            if (response.data.status === 'true') {
                setCount(40);
                alert('OTP sent Successfully');
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
                type="number"
                title="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter Your 4-digit OTP"
                className='shadow-md outline-none p-2 rounded mb-4 font-poppin'
            />

            {
                count === 0 ?
                    <h1
                        onClick={handleResend}
                        className="text-md text-green-600 font-semibold font-poppin hover:cursor-pointer"
                    >Resend OTP</h1>
                    :
                    <Timer count={count} setCount={setCount} />
            }

            <button
                onClick={handleSubmit}
                className='mt-10 shadow-md text-2xl font-bold font-poppin bg-red-600 text-white rounded py-2'>
                Submit
            </button>
        </>
    )
}