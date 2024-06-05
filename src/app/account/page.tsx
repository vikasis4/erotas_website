'use client'
import React from 'react'
import Logout from '@/components/auth/Logout'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/user/useUser';

function page() {

    const router = useRouter();
    const { name, email } = useUser()


    return (
        <div className="flex flex-col font-poppin gap-6 justify-center items-start p-10 mt-4 lg:w-[50%] lg:m-auto">
            <h1 className="font-semibold">Name :- {name}</h1>
            <h1 className="font-semibold">Email :- {email}</h1>
            <h1 onClick={() => router.push('/address')} className="lg:hover:cursor-pointer font-semibold bg-red-600 rounded-md px-8 py-2 text-white shadow-lg">Delivery Address</h1>
            <h1 onClick={() => router.push('/support')} className="lg:hover:cursor-pointer font-semibold bg-red-600 rounded-md px-8 py-2 text-white shadow-lg">Customer Support</h1>
            <h1 onClick={() => router.push('/orders')} className=" lg:hover:cursor-pointer font-semibold bg-red-600 rounded-md px-8 py-2 text-white shadow-lg">See Your Orders</h1>
            <Logout />
        </div>
    )
}

export default page