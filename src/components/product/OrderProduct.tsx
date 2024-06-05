'use client'
import React from 'react'
import { ProductBaseURL } from "@/config/apis";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

function OrderProduct({ data }: any) {

    const { products, orderId } = data;
    const { name, imageLink } = products[0];
    const router = useRouter()
    const myLoader = () => {
        return ProductBaseURL + imageLink;
    }
    const size = products.length - 1

    return (
        <div className='flex gap-4 border-box'>
            <Image loader={myLoader} src={ProductBaseURL + imageLink} alt="product" height="150" width="150"
                className="rounded-md shadow flex-2"
            />
            <div className='text-2xl font-bold flex-2 py-2 flex flex-col gap-1 justify-center items-start'>
                <h1>{name}</h1>
                <div className='flex flex-col gap-4 mt-2'>
                    <Button size="lg" variant="outline" onClick={() => router.push(`orders/${orderId}`)}>View Order</Button>
                    {
                        size === 0 ?
                            null :
                            <h1 className='text-sm'>+{size} more products</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderProduct