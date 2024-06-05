'use client'
import { useParams, useRouter } from "next/navigation"
import React from "react";
import Image from "next/image";
import { ProductBaseURL } from "@/config/apis";
import ProductConfig from "@/components/product/ProductConfig";
import useGetProduct from "@/hooks/products/useGetProduct";
import Description from "@/components/product/Description";

export default function Page() {

    const id = useParams();
    const getProduct = useGetProduct();
    const [currentImage, setCurrentImage] = React.useState(0);
    const router = useRouter();
    const product = getProduct(id.productId)



    ///////////////////////////////////////// IMAGE LOADERS ///////////////////////////////////
    const myLoader = () => {
        return ProductBaseURL + product?.imagesLink[currentImage];
    }
    const newLoader = (index: number) => {
        return ProductBaseURL + product?.imagesLink[index];
    }

    return (
        <>
            {

                <div className="flex lg:flex-row flex-col justify-between mt-12 gap-12 lg:gap-0">

                    <div className="flex lg:flex-row border-box flex-col-reverse flex-1 justify-center items-center lg:items-start lg:gap-10">
                        <div className="flex lg:flex-1 justify-center items-center gap-8 mt-12 lg:flex-col w-full">
                            {
                                product?.imagesLink?.map((link, index) => {
                                    return (<div key={index}>
                                        <Image onClick={() => setCurrentImage(index)} loader={() => newLoader(index)} src={ProductBaseURL + product.imagesLink[index]} alt="product" height="50" width="50"
                                            className="rounded-xl h-20 w-20 shadow-lg lg:hover:scale-[2.5] hover:cursor-pointer duration-300"
                                        />
                                    </div>)
                                })
                            }
                        </div>
                        <div>
                            <Image loader={myLoader} src={ProductBaseURL + product?.imagesLink[0]} alt="product" height="350" width="350"
                                className="rounded-xl shadow-lg lg:flex-3 lg:mr-24"
                            />
                        </div>
                    </div>

                    <div className="font-playfair text-center border-box px-4 flex-1 gap-8 flex flex-col justify-between items-center pr-4 pb-12">
                        <h1 className="font-semibold text-3xl" >{product?.name}</h1>
                        <div className="flex gap-4">
                            <h1 className="text-2xl md:text-xl font-poppin font-bold text-primary text-center py-1">&#8377; {product?.price}</h1>
                            <h1 className="line-through text-xl md:text-2xl font-poppin text-red-300 text-center py-1">&#8377; {product? product.price + 300 : null}</h1>
                            <h1 className="text-xl md:text-2xl font-poppin text-green-500 text-center py-1">{Math.round((300) * 100 / (product? product.price + 300 : 1))}% off</h1>

                        </div>
                        <div className="flex border-box w-full gap-4 justify-center items-center">
                            <button onClick={() => router.push('/cart')} className="bg-red-200 border border-red-200 active:scale-90 rounded lg:hover:scale-125 flex-1 duration-300 font-semibold text-primary shadow text-xl px-3 py-4" >Go To Cart</button>
                            <ProductConfig productId={id.productId} />
                        </div>
                        <div className="w-full p-4 flex flex-col justify-center items-center gap-6">
                            {
                                product?.description.map((data, index) =>(<Description key={index} description={data} />))
                            }
                        </div>
                        <h1 className="font-semibold text-4xl">Reviews</h1>
                        <div className="flex flex-wrap gap-4">
                            {
                                product?.reviews?.map((review, index) => {
                                    return (<div key={index}>
                                        <h1 className="bg-white rounded font-poppin text-sm shadow-md p-2 text-left" >{review}</h1>
                                    </div>)
                                })
                            }
                        </div>
                    </div>

                </div>
            }
        </>
    )
}