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
        <div onClick={() => router.push(`/product/${productId}`)} className="hover:cursor-pointer flex flex-col justify-center items-center shadow-lg py-4 overflow-hidden rounded-xl bg-white w-96">
            <Image loader={myLoader} src={ProductBaseURL + imagesLink[0]} alt="Product" height={300} width={300} />
            <div className="px-4 bg-white">
                <h1 className="text-lg font-poppin text-black text-center py-1">{name}</h1>
                <h1 className="text-2xl font-poppin font-normal  text-green-700 text-center py-1">&#8377; {price} /-</h1>
            </div>
        </div>
    )
}

export default ProductMap