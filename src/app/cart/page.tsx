'use client'

import React from 'react';
import { useGetCartQuery } from '@/redux/slice/cart';
import { useAppSelector } from '@/redux/hooks';
import Loader from '@/components/Loader';
import CartElementMap from '@/components/CartElementMap';
import priceCalc from '@/utils/priceCalculator';

function page() {

    const userId = useAppSelector((state) => state.general._id)
    const { isLoading, data } = useGetCartQuery(userId);


    if (data?.cart?.length === 0) {
        return <>
            <h1 className="text-8xl flex h-full w-full justify-center items-center ">Cart is Empty</h1>
        </>
    }


    return (
        <>
            <h1 className="text-4xl text-center my-12">Manage Your Cart</h1>

            <div className="font-poppin my-24 h-fll w-full flex justify-center items-start p-8">

                <div className="flex flex-1 flex-wrap justify-center items-center gap-6 ">
                    {
                        isLoading ?
                            <Loader />
                            :
                            data?.cart.map((data: any) => <CartElementMap key={data._id} data={data} />)
                    }
                </div>

                <div className="flex-1 font-semibold text-2xl flex-col flex gap-10 justify-center items-center">
                    <h1 className=""> Your Final Pricing is</h1>
                    <h1 className=" text-green-600">&#8377; {priceCalc(data?.cart)} /-</h1>
                    <button className="bg-green-600 text-white py-2 px-4 shadow-md rounded">Proceed To Pay</button>
                </div>

            </div>
        </>
    )
}

export default page