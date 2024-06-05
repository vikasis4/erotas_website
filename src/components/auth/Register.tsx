import React from "react";
import axios from "axios";
import { signUpApi } from '@/config/apis';
import ValidateEmail from '@/utils/emailCheck'
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast"


export default function Register({ setState, state, redux }: any) {

    const [form, setForm] = React.useState({
        email: '',
        name: ''
    })
    const { toast } = useToast()


    const handleSubmit = async () => {

        var res = ValidateEmail(form.email);
        if (!res) {
            toast({
                variant: "destructive",
                title: "Warning",
                description: "Email is not valid",
            })
            return
        } if (form.name.length === 0) {
            toast({
                variant: "destructive",
                title: "Warning",
                description: "Name field cannot be empty",
            })
            return
        }
        redux.dispatch(redux.setIsLoading(true))
        await axios.post(signUpApi, form).then((response) => {
            if (response.data.status === 'true') {
                setState({ email: form.email, status: 'otp' })
            } else if (response.data.status === 'user') {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "Account with this Email already exsists",
                })
            } else {
                toast({
                    variant: "destructive",
                    title: "Warning",
                    description: "Something went wrong, please try again later",
                })
            }
            setForm({ name: '', email: '' })
        })
        redux.dispatch(redux.setIsLoading(false))
    }

    return (
        <>
            <Input
                type="text"
                title="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter Your Name"
                className='shadow-md outline-none p-4 font-medium rounded mb-4 font-poppin'
            />
            <Input
                required
                type="email"
                title="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter Your Email"
                className='shadow-md outline-none p-4 font-medium rounded font-poppin'
            />
            <Button
                size="lg"
                className="mt-12"
                onClick={handleSubmit}>
                Submit
            </Button>
            <h1 className="mt-8 text-md font-semibold font-playfair" >Already have an account ?</h1>
            <h1
                onClick={() => setState({ ...state, status: 'login' })}
                className="hover:cursor-pointer text-md text-bold font-playfair font-semibold text-primary">Login here</h1>
        </>
    )
}