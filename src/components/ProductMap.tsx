import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ProductBaseURL } from '@/config/apis'

function ProductMap({ data }: any) {

    const { name, price, productId, imagesLink } = data
    const router = useRouter();
    const myLoader = () => {
        return ProductBaseURL + imagesLink[0];
    }

    return (
        <div
            className="flex flex-col justify-center items-center w-[90%] shadow-md md:w-[40%] py-4 overflow-hidden rounded-xl bg-white font-poppin">
            <Image loader={myLoader} src={ProductBaseURL + imagesLink[0]} alt="Product" height={150} width={150} />
            <div className="px-4 bg-white">
                <h1 className="text-md md:text-lg font-poppin font-medium text-black text-center py-1">{name}</h1>
                <h1 className="text-2xl md:text-2xl font-poppin font-medium  text-green-700 text-center py-1">&#8377; {price} /-</h1>
            </div>
            <button onClick={() => router.push(`/product/${productId}`)}
                className='bg-red-600 rounded my-4 shadow-md font-medium py-2 px-4 text-white'
            >View Product</button>
        </div>
    )
}

export default ProductMap