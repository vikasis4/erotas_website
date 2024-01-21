import React from 'react'
import ProductConfig from '@/components/product/ProductConfig';
import { ProductBaseURL } from '@/config/apis';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function CartElementMap({ data }: any) {
    var imageLink = ProductBaseURL + data.imageLink;
    const router = useRouter()

    const myLoader = () => {
        return imageLink;
    }
    return (
        <div key={data._id} className="rounded shadow-md p-4">
            <Image className='m-auto rounded-md mb-4' loader={myLoader} src={imageLink} alt="product" height={100} width={100} />
            <h1 onClick={() => router.push(`/product/${data.productId}`)} className="hover:underline text-center font-medium hover:cursor-pointer" >{data.name}</h1>
            <h1 className="text-green-700 text-center font-bold py-6 text-2xl">&#8377; {data.price} /-</h1>
            <ProductConfig productId={data.productId} />
        </div>
    )
}

export default CartElementMap