'use client'
import React from 'react';
import useRazorpay from '@/hooks/useRazorpay';

function page() {

    const Razorpay = useRazorpay()

    return (
        <div className="flex justify-center items-center h-full w-full">
            <button className="bg-red-600 shadow-md rounded-md px-8 py-2 text-white text-2xl hover:cursor-pointer" onClick={() => Razorpay()} > Pay</button>
        </div>
    )
}

export default page