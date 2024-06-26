import { OrderType } from '@/redux/types'
import React from 'react'
import SimpleAddress from '@/components/address/SimpleAddress'

function OrderElement({ data }: { data: OrderType }) {

    const { price, paymentId, orderId, trackingLink, shipmentCreated, delivered, created_at, products, address } = data
    var newAddress = { ...address, _id: 'yo' };


    return (
        <div className="w-full flex flex-col gap-2 font-playfair rounded-md shadow-md bg-primary text-primary-foreground p-2">
            <div className="flex gap-2 text-sm">
                <h1 className="font-semibold">Delivery Status :- </h1>
                <h1 >{delivered ? 'Delivered' : "Pending"}</h1>
            </div>
            <div className="flex gap-1 text-sm">
                <h1 className="font-semibold">Dispatch : </h1>
                {
                    shipmentCreated ?
                        <h1>Done</h1>
                        :
                        <h1>Pending</h1>
                }
                {
                    trackingLink.length === 0 ?
                        <h1 onClick={() => alert('Dispatch is pending!!!, You can track order after dispatch is done, it usually takes 1 day')} className='px-4 py-1 bg-white rounded-sm ml-4 text-xs shadow-md text-primary lg:hover:cursor-pointer'>Track Order</h1>
                        :
                        <a rel='noopener' href="https://github.com/" target="_blank" className='px-4 py-1 bg-white rounded-sm ml-4 text-xs shadow-md text-black lg:hover:cursor-pointer'>Track Order</a>
                }
            </div>
            <div className="flex gap-2 text-sm">
                <h1 className="font-semibold">OrderId :- </h1>
                <h1>{orderId}</h1>
            </div>
            <div className="flex flex-col gap-2 text-sm">
                <h1 className="font-semibold">Products : </h1>
                {
                    // products.map((data, index) => ())
                }
            </div>
            <div className="flex gap-2 text-sm">
                <h1 className="font-semibold">Amount Paid :- </h1>
                <h1 >{price}</h1>
            </div>
            <div className="flex gap-2 text-sm">
                <h1 className="font-semibold">Payment ID :- </h1>
                <h1 >{paymentId}</h1>
            </div>
            <div className="flex gap-2 text-sm">
                <h1 className="font-semibold">Order Date :- </h1>
                <h1>{created_at.toString().slice(0, 10)}</h1>
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <h1 className="font-semibold">Delivery Address : </h1>
                <SimpleAddress data={newAddress} />
            </div>
        </div>
    )
}

export default OrderElement