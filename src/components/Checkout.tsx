import React from 'react'
import SimpleAddress from './address/SimpleAddress'
import useGeneral from '@/hooks/general/useGeneral'
import useGetAddress from '@/hooks/address/useGetAddress'
import priceCalc from '@/utils/priceCalculator';
import useCart from '@/hooks/cart/useCart';
import useRazorpay from '@/hooks/useRazorpay';

function Checkout({ setAddressSelected }: any) {

    const cart = useCart();
    const address = useGetAddress();
    const { addressId } = useGeneral();
    const razorpay = useRazorpay();

    var addressElement = address.filter((state) => state._id === addressId)
    const handleClick = () => { };


    return (
        <div className="relative">
            <button onClick={() => setAddressSelected(false)} className="bg-white rounded-md shadow-md px-12 py-2 font-poppin m-4 font-semibold lg:hover:cursor-pointer">
                Go Back
            </button>
            {
                addressElement.length > 0 ?
                    <SimpleAddress data={addressElement[0]} />
                    :
                    null
            }

            <div className='flex flex-col gap-2 px-8 my-8 font-poppin text-md'>
                <div className='flex gap-4'>
                    <h1 className='font-semibold'>Final Price :</h1>
                    <h1>&#8377; {priceCalc(cart)}</h1>
                </div>
                <div className='flex gap-4'>
                    <h1 className='font-semibold'>Delivery Chanrges :</h1>
                    <h1>&#8377; 0</h1>
                </div>
                <div className='flex gap-4'>
                    <h1 className='font-semibold'>Discount Coupon :</h1>
                    <h1>20% Applied</h1>
                </div>
            </div>

            <div className="fixed bottom-0 w-full h-16 bg-red-600 flex justify-center items-center">
                <button onClick={() => razorpay()} className="bg-white rounded-md shadow-md px-16 py-2 font-poppin font-semibold lg:hover:cursor-pointer">
                    Pay
                </button>
            </div>
        </div>
    )
}

export default Checkout