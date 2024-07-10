import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ProductBaseURL } from '@/config/apis'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import FavButton from '../FavButton'
import YesImage from '../YesImage'


function ProductMap({ data }: any) {

    const { name, price, productId } = data;
    var imageLink = data.imagesLink ? data.imagesLink[0] : data.imageLink
    const router = useRouter();

    return (
        <>
            <Card onClick={() => router.push(`/product/${productId}`)} className="w-[45%] mb-4 md:w-[30%] hover:cursor-pointer lg:w-[20%]">
                <CardHeader className='m-0 p-0'>
                    <CardTitle className='flex justify-center items-center m-0 p-0'>
                        <YesImage l={imageLink} d={2500} c='rounded-t-lg shadow-md' />
                    </CardTitle>
                </CardHeader>
                <CardContent className='flex gap-4 px-4 justify-start items-center'>
                    <div className="mt-4 w-full">
                        <div className='flex w-full justify-between items-center'>
                            <h2 className="text-lg font-semibold">{name}</h2>
                            <FavButton productId={productId} />
                        </div>
                        <p className="text-gray-500 mt-1">₹{price} onwards</p>
                        <p className="text-green-600 text-sm font-semibold mt-2">Free Delivery</p>
                        <div className="flex items-center mt-2">
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">{Math.floor(Math.random() * 10)}.{Math.floor(Math.random() * 10)}</span>
                            <span className="ml-2 text-sm text-gray-600">{Math.floor(Math.random() * 100)} Reviews</span>
                        </div>
                        <p className="text-blue-500 mt-2 text-sm">+{Math.floor(Math.random() * 10)} More</p>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductMap