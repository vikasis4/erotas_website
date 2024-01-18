'use client'

import React from 'react';
import CartElementMap from '@/components/CartElementMap';
import priceCalc from '@/utils/priceCalculator';
import useCart from '@/hooks/cart/useCart';
import { useRouter } from 'next/navigation';

function page() {

    const cart = useCart();
    const router = useRouter();

    if (cart.length === 0) {
        return (
            <>
                <h1 className="text-8xl flex h-full w-full justify-center items-center ">Cart is Empty</h1>
            </>
        )
    }

    return (
        <>
            <div className="font-poppin my-12 h-fll w-full flex justify-center items-start px-8">

                <div className="flex flex-1 flex-wrap justify-center items-center gap-6 ">
                    {
                        cart.map((data: any) => <CartElementMap key={data._id} data={data} />)
                    }

                    <div className="lg:hidden h-[10rem]"></div>
                </div>

                <div className="flex-1 font-semibold lg:bg-[#F5F5F5] bg-red-600 text-2xl lg:flex-col flex gap-0  py-4 lg:gap-10 justify-around items-center lg:relative fixed bottom-0 w-full">
                    <h1 className="hidden lg:block text-black">Total Price :</h1>
                    <h1 className="lg:hidden text-white lg:text-black">Total - &nbsp; &#8377; {priceCalc(cart)}</h1>
                    <h1 className=" hidden lg:block text-white lg:text-green-600">&#8377; {priceCalc(cart)}</h1>
                    <button onClick={() => router.push('/pay')}className="bg-white lg:bg-green-600 text-black lg:text-white py-2 px-4 shadow-md rounded">Proceed</button>
                </div>

            </div>
        </>
    )
}

export default page