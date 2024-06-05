'use client'
import React from "react";
import axios from "axios";
import { otpVerifyApi, otpGenerateApi } from '@/config/apis';
import Timer from "../Timer";
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast"

export default function Otp({ state, redux }: any) {

    const [otp, setOtp] = React.useState<any>();
    const [count, setCount] = React.useState(40);
    const { toast } = useToast()



    const handleSubmit = async () => {
        redux.dispatch(redux.setIsLoading(true))
        await axios.post(otpVerifyApi, { otp, email: state.email }).then(response => {
            if (response.data.status === 'true') {
                localStorage.setItem('JWT_token', response.data.token);
                location.reload()
            } else if (response.data.status === 'false') {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "Wrong OTP",
                })
            } else {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "Sometihng went wrong, please try again later",
                })
            }
        })
        redux.dispatch(redux.setIsLoading(false))
    }

    const handleResend = async () => {
        redux.dispatch(redux.setIsLoading(true))
        await axios.post(otpGenerateApi, { email: state.email }).then((response: any) => {
            if (response.data.status === 'true') {
                setCount(40);
                toast({
                    title: "Warning",
                    description: "OTP sent Successfully",
                })
            } else if (response.data.status === 'nouser') {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "No user found",
                })
            } else {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "Sometihng went wrong, please try again later",
                })
            }
        })
        redux.dispatch(redux.setIsLoading(false))
    }
    return (
        <>
            <Input
                type="number"
                title="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter Your 4-digit OTP"
                className='shadow-md outline-none p-4 font-medium rounded mb-4 font-poppin'
            />

            {
                count === 0 ?
                    <h1
                        onClick={handleResend}
                        className="text-md text-primary font-semibold font-playfair hover:cursor-pointer"
                    >Resend OTP</h1>
                    :
                    <Timer count={count} setCount={setCount} />
            }

            <Button
                size="lg"
                onClick={handleSubmit}>
                Submit
            </Button>
        </>
    )
}