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


function ProductMap({ data }: any) {

    const { name, price, productId, imagesLink } = data
    const router = useRouter();
    const myLoader = () => {
        return ProductBaseURL + imagesLink[0];
    }
    

    return (
        <>
            <Card className="w-[90%] m-auto lg:w-[40%]">
                <CardHeader>
                    <CardTitle className='flex justify-center items-center'>
                        <Image className='rounded-lg shadow-md' loader={myLoader} src={ProductBaseURL + imagesLink[0]} alt="Product" height={400} width={400} />
                    </CardTitle>
                    <CardDescription>
                        <h1 className="text-3xl md:text-lg font-playfair font-medium text-black text-center py-1">{name}</h1>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl md:text-2xl font-mono font-bold text-primary text-center py-1">&#8377; {price} /-</h1>
                </CardContent>
                <CardFooter className='flex flex-col justify-center items-center gap-4'>
                    <Button className='w-full' onClick={() => router.push(`/product/${productId}`)}>View Product</Button>
                    <FavButton productId={productId} />
                </CardFooter>
            </Card>
        </>
    )
}

export default ProductMap