'use client'
import React from 'react'
import Logout from '@/components/Logout'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function page() {

    var general = useAppSelector((state) => state.general);
    const router = useRouter()


    return (
        <div className="flex flex-col font-poppin gap-6 justify-center items-start p-10 mt-4 lg:w-[50%] lg:m-auto">
            <h1 className="font-semibold">Name :- {general.name}</h1>
            <h1 className="font-semibold">Email :- {general.email}</h1>
            <div className="flex relative mt-2">
                <h1 className="font-semibold">Delivery Address :- none</h1>
                <Image onClick={()=> router.push('/address')} className="lg:hover:cursor-pointer absolute bottom-3 right-[-1.4rem]" src={require('../../assets/icon/edit.png')} alt="erota" height="20" width="20" />
            </div>
            <h1 onClick={()=> router.push('/address')} className="lg:hover:cursor-pointer font-semibold bg-red-600 rounded-md px-8 py-2 text-white shadow-lg">Customer Support</h1>
            <h1 className=" lg:hover:cursor-pointer font-semibold bg-red-600 rounded-md px-8 py-2 text-white shadow-lg">See Your Orders</h1>
            <Logout />
        </div>
    )
}

export default page