'use client'
import React from 'react'
import { useParams } from 'next/navigation';
import useGetOrder from '@/hooks/order/useGetOrder'
import ShowProducts from '@/components/product/ShowProducts';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"

function page() {

    const id = useParams();
    const ordersList = useGetOrder();
    const { toast } = useToast()
    var order;
    order = ordersList.filter((order: any) => order.orderId === id.orderId)[0]

    console.log(order);

    return (
        (order &&
            <div className='mx-4 font-playfair'>

                <h1 className='mt-4'>Order details</h1>
                <div className='p-4 border border-primary rounded'>
                    <div className='flex gap-4'>
                        <h1>Order date:</h1>
                        <h1>{order.created_at.toString().slice(0, 10)}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>Order price:</h1>
                        <h1>{order.price}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>Order Id:</h1>
                        <h1>{order.orderId}</h1>
                    </div>
                </div>

                <h1 className='mt-4'>Delivery Status</h1>
                <div className='p-4 border border-primary rounded'>
                    <div className='flex gap-4'>
                        <h1>Package Shipped ?:</h1>
                        <h1>{order.shipmentCreated ? 'Dispatched' : 'Pending'}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>Package delivered ?:</h1>
                        <h1>{order.delivered ? 'Delivered' : 'Not yet delivered'}</h1>
                    </div>
                    <div className='flex gap-4'>
                        {
                            order.trackingLink.length < 4 ?
                                <Button className='mt-2' onClick={() => toast({
                                    title: "Warning",
                                    description: "Package is not shipped yet, After shipment you can track package, it usually takes 1 day",
                                })} size="sm">Track Order</Button>
                                :
                                <a className='mt-2' rel="noopener" target='_blank' href={order.trackingLink}><Button size="sm">Track Order</Button></a>
                        }
                    </div>
                </div>

                <h1 className='mt-4'>Billing address</h1>
                <div className='p-4 border border-primary rounded'>
                    <div className='flex gap-4'>
                        <h1>Address Line:</h1>
                        <h1>{order.address.address}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>Phone:</h1>
                        <h1>{order.address.phone}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>Pincode:</h1>
                        <h1>{order.address.pincode}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>City:</h1>
                        <h1>{order.address.city}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>State:</h1>
                        <h1>{order.address.state}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>Nearby Landmark:</h1>
                        <h1>{order.address.landMark}</h1>
                    </div>
                </div>

                <h1 className='mt-4'>Payment details</h1>
                <div className='p-4 border border-primary rounded'>
                    <div className='flex gap-4'>
                        <h1>Payment Id:</h1>
                        <h1>{order.paymentId}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>Payment date:</h1>
                        <h1>{order.created_at.toString().slice(0, 10)}</h1>
                    </div>
                    <div className='flex gap-4'>
                        <h1>Amount paid:</h1>
                        <h1>{order.price}</h1>
                    </div>
                </div>

                <h1 className='mt-4'>Ordered Products</h1>
                <div className='p-4 border border-primary rounded flex flex-col gap-4'>
                    {
                        order.products.map((product) => (<ShowProducts data={product} />))
                    }
                </div>

            </div>
        )
    )
}

export default page