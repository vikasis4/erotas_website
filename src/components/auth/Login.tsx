import React from "react";
import axios from "axios";
import { signInApi } from '@/config/apis';
import ValidateEmail from '@/utils/emailCheck'
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast"

export default function Login({ state, setState, redux }: any) {

    const { toast } = useToast()

    const handleSubmit = async () => {
        var res = ValidateEmail(state.email);
        if (!res) {
            toast({
                variant: "destructive",
                title: "Warning",
                description: "Email is not valid",
            })
            return
        }
        redux.dispatch(redux.setIsLoading(true))
        await axios.post(signInApi, { email: state.email }).then((response: any) => {
            if (response.data.status === 'true') {
                setState({ ...state, status: 'otp' })
            } else if (response.data.status === 'nouser') {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "User with this email not found",
                })
            } else {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "Something went wrong",
                })
            }
        })
        redux.dispatch(redux.setIsLoading(false))
    }

    return (
        <>
            <Input
                type="text"
                title="name"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                placeholder="Enter Your Email"
                className='outline-none p-4 font-medium rounded mb-4 font-poppin shadow-md'
            />
            <Button
            size="lg"
                onClick={handleSubmit}>
                Submit
            </Button>
            <h1 className="mt-8 text-md font-semibold font-playfair" >Don't have an account ?</h1>
            <h1
                onClick={() => setState({ ...state, status: 'register' })}
                className="hover:cursor-pointer text-md font-semibold font-playfair text-primary">Register here</h1>
        </>
    )
}