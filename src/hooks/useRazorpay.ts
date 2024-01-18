'use client'

import axios from 'axios';
import useUser from '@/hooks/user/useUser';
import useGeneral from '@/hooks/general/useGeneral';
import { rzpCallBack, rzpOrder } from '@/config/apis'

const useRazorpay = () => {

    var { name, email, userId } = useUser();
    var { delivery_address } = useGeneral();

    // rzp_live_14f793Ecrb21Gi
    // rzp_test_VD0r7oIRVyrcyS

    var key = 'rzp_live_14f793Ecrb21Gi'
    var orderId = ''


    const Razorpay = async () => {

        await axios.post(rzpOrder, { address: delivery_address, userId }).then(response => {
            orderId = response.data.order.id
        })

        var options: any = {
            "key": key,
            "currency": "INR",
            "name": "Erota",
            "description": "erota products transaction",
            "order_id": orderId,
            "handler": async function (response: any) {
                var body = { ...response }
                var res = await fetch(rzpCallBack, {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                var status = await res.json();
                if (status.status === 'true') {
                    alert('Payment is Successful')
                } else {
                    alert('Something went wrong, please use customer support to resolve this issue')
                }
            },
            "prefill": {
                "name": name,
                "email": email,
                "contact": delivery_address.phone
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1: any = new window.Razorpay(options);
        rzp1.open();
    }

    return Razorpay
}

export default useRazorpay