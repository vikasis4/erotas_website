'use client'
import React from 'react'
import { ProductBaseURL } from "@/config/apis";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function OrderProduct({ data }: any) {

    const { name, price, productId, imageLink, qty } = data;
    const router = useRouter()
    const myLoader = () => {
        return ProductBaseURL + imageLink;
    }
    return (
        <div className='flex gap-4 border-box'>
            <Image loader={myLoader} src={ProductBaseURL + imageLink} alt="product" height="50" width="50"
                className="rounded-md shadow-md flex-2"
            />
            <div className='text-xs flex-2 py-2 flex flex-col gap-1 justify-center items-start'>
                <h1>{name}</h1>
                <div className='flex gap-4'>
                    <h1>&#8377; {price}</h1>
                    <h1>Qty :- {qty}</h1>
                    <button onClick={() => router.push(`product/${productId}`)} className='px-4 py-1 bg-red-600 rounded-md shadow-md text-white lg:hover:cursor-pointer'>View Product</button>
                </div>
            </div>
        </div>
    )
}

export default OrderProduct