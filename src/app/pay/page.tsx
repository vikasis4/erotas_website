'use client'
import React from 'react';
import useRazorpay from '@/hooks/useRazorpay';
import useCart from '@/hooks/cart/useCart';
import { useRouter } from 'next/navigation';
import SelectAddress from '@/components/address/SelectAddress';
import Checkout from '@/components/Checkout';

function page() {

    const cart = useCart();
    const router = useRouter();
    const [addressSelected, setAddressSelected] = React.useState(false);

    React.useEffect(() => {
        if (cart.length === 0) {
            router.push('/')
        }
    }, [])

    return (
        <>
            {
                addressSelected ?
                    <Checkout setAddressSelected={setAddressSelected} />
                    :
                    <SelectAddress setAddressSelected={setAddressSelected} />
            }
        </>
    )
}

export default page