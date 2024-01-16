'use client'
import React from 'react';
import axios from 'axios';
import { baseUrl } from '@/config/apis';

// order_NPD77r5mh2jKWv

function page() {



    const paynow = async () => {
        var orderId = ''
        await axios.post(baseUrl + 'pay/order', {}).then(response => {
            orderId = response.data.order.id
        })

        var options: any = {
            "key": "rzp_live_14f793Ecrb21Gi",
            "amount": "100",
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "handler": function (response: any) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1: any = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <div className="flex justify-center items-center h-full w-full">
            <button className="bg-red-600 shadow-md rounded-md px-8 py-2 text-white text-2xl hover:cursor-pointer" onClick={paynow} > Pay</button>
        </div>
    )
}

export default page