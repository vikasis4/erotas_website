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
                <div className="flex flex-col lg:flex-row p-4 items-start mt-4 md:mt-12">

                    <div className="flex md:ml-16 flex-col md:flex-row-reverse gap-8 justify-center items-start">
                        <div className="w-full flex justify-center items-center flex-col">
                            <Image loader={myLoader} src={ProductBaseURL + product?.imagesLink[0]} alt="product" height="500" width="500"
                                className="rounded-xl border border-gray-400 shadow-lg"
                            />
                            <div className="mt-6 flex space-x-4 w-full justify-center items-center">
                                <ProductConfig productId={id.productId} />
                                <button onClick={() => router.push('/cart')} className="bg-primary text-white px-10 py-4 md:px-6 md:py-2 rounded-md hover:bg-primary-foreground hover:border hover:border-primary border hover:text-primary transition-colors duration-600">
                                    Go to Cart
                                </button>
                            </div>
                        </div>
                        <div className="flex md:flex-col mb-4 gap-4 md:mt-4 w-full md:w-[20%] justify-center">
                            {product?.imagesLink?.map((src: any, index: any) => (
                                <Image onClick={() => setCurrentImage(index)} loader={() => newLoader(index)} src={ProductBaseURL + product.imagesLink[index]} alt="product" height="50" width="50"
                                    className="rounded-md h-20 w-20 hover:cursor-pointer duration-300 border border-gray-400"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex-grow mt-4 lg:mt-0 lg:ml-8">
                        <div className="border border-gray-200 md:w-3/4 p-8 rounded-md">
                            <h2 className="text-2xl font-semibold">{product?.name}</h2>
                            <p className="text-2xl text-gray-800 font-semibold mt-2">₹ {product?.price}</p>
                            <div className="flex items-center mt-2">
                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">3.7</span>
                                <span className="ml-2 text-gray-600">97 Ratings, 139 Reviews</span>
                            </div>
                            <p className="text-green-600 font-semibold mt-2">Free Delivery</p>
                        </div>

                        <div className="mt-4 border-gray-200 md:w-3/4 p-8 rounded-md border">
                            <ul className="text-gray-700 mt-2 space-y-1">
                                {
                                    product?.description.map((data: any, index: any) => (<Description key={index} description={data} />))
                                }
                            </ul>
                        </div>


                        <div className="mt-4 border-gray-200 md:w-3/4 p-8 rounded-md border">
                            <h1 className="font-bold text-2xl pb-2">
                                Reviews
                            </h1>
                            <ul className="text-gray-700 mt-2 space-y-1">
                                {
                                    product?.reviews?.map((review: any, index: any) => {
                                        return (<div key={index}>
                                            <h1 className="bg-white rounded font-poppin text-sm p-2 text-left" >* {review}</h1>
                                        </div>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}