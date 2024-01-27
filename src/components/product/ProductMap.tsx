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
            <Card className="w-[90%] m-auto lg:w-[40%]">
                <CardHeader>
                    <CardTitle className='flex justify-center items-center'>
                    <YesImage l={imageLink} d={400} c='rounded-lg shadow-md' />
                    </CardTitle>
                    <CardDescription className='flex justify-around items-center pt-4'>
                        <h1 className="text-2xl md:text-lg font-playfair font-medium text-black text-center py-1">{name}</h1>
                        <FavButton productId={productId} />
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex gap-4 px-12 justify-start items-center'>
                    <h1 className="text-2xl md:text-xl font-poppin font-bold text-primary text-center py-1">&#8377; {price}</h1>
                    <h1 className="line-through text-xl md:text-2xl font-poppin text-red-300 text-center py-1">&#8377; {price+300}</h1>
                    <h1 className="text-xl md:text-2xl font-poppin text-green-500 text-center py-1">{Math.round((300)*100/(price+300))}% off</h1>
                </CardContent>
                <CardFooter className='flex flex-col justify-center items-center gap-4'>
                    <Button size="lg" className='text-base font-playfair w-full' onClick={() => router.push(`/product/${productId}`)}>View Product</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default ProductMap