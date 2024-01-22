'use client'
import React from 'react'
import { ProductBaseURL } from "@/config/apis";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

function ShowProducts({ data }: any) {

    const { name, imageLink, productId, price } = data;
    const router = useRouter()
    const myLoader = () => {
        return ProductBaseURL + imageLink;
    }

    return (
        <div className='flex gap-4 border-box'>
            <Image loader={myLoader} src={ProductBaseURL + imageLink} alt="product" height="70" width="70"
                className="rounded-md shadow flex-2"
            />
            <div className='text-xs font-bold flex-2 py-2 flex flex-col gap-1 justify-center items-start'>
                <h1>{name}</h1>
                <div className='flex gap-4 mt-2 justify-center items-center'>
                    <h1 className='font-mono text-xl text-primary'>Rs_{price}/-</h1>
                    <Button size="sm" variant="outline" onClick={() => router.push(`product/${productId}`)}>View Product</Button>

                </div>
            </div>
        </div>
    )
}

export default ShowProducts