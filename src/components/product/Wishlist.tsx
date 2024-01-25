import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import YesImage from '../YesImage'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'


function Wishlist({ removeFromWishList, product }: any) {

    const router = useRouter()

    return (
        <Card className='w-[90%] m-auto lg:w-50%'>
            <CardHeader>
                <CardTitle className='text-center text-2xl font-playfair'>{product.name}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <YesImage l={product.imageLink} d={500} c="shadow-md rounded-md" />
            </CardContent>
            <CardFooter className="flex gap-4">
                <Button onClick={() => router.push(`/product/${product.productId}`)}>View Product</Button>
                <Button onClick={() => removeFromWishList(product.productId)}>Remove from Fav</Button>
            </CardFooter>
        </Card>

    )
}

export default Wishlist