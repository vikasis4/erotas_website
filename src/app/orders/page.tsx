'use client'
import React from 'react'
import useGetOrder from '@/hooks/order/useGetOrder'
import OrderElement from '@/components/OrderElement';

function page() {

    const ordersList = useGetOrder();
    var orders = ordersList.slice().reverse();

    return (
        <>
            {

                orders && orders.length > 0 ? (
                    <div className="font-playfair text-2xl p-6 flex flex-col gap-6">
                        <h1 className="text-center text-2xl">All Orders</h1>
                        {
                            orders.map((data, index) => (<OrderElement key={index} data={data} />))
                        }
                    </div>
                )
                    :
                    <h1 className="h-full py-36 w-full flex justify-center items-center font-playfair text-6xl font-bold">No Orders</h1>
            }
        </>
    )
}

export default page