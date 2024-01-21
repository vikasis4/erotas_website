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
                        <Image loader={myLoader} src={ProductBaseURL + imagesLink[0]} alt="Product" height={150} width={150} />
                    </CardTitle>
                    <CardDescription>
                        <h1 className="text-sm md:text-lg font-playfair font-medium text-black text-center py-1">{name}</h1>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl md:text-2xl font-mono font-medium  text-primary text-center py-1">&#8377; {price} /-</h1>
                </CardContent>
                <CardFooter>
                    <Button size="lg" onClick={() => router.push(`/product/${productId}`)}>View Product</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default ProductMap