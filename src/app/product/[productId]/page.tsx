'use client'
import { useParams, useRouter } from "next/navigation"
import React from "react";
import Image from "next/image";
import { ProductBaseURL } from "@/config/apis";
import ProductConfig from "@/components/product/ProductConfig";
import useGetProduct from "@/hooks/products/useGetProduct";

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
                            <Image loader={myLoader} src={ProductBaseURL + product?.imagesLink[0]} alt="product" height="300" width="300"
                                className="rounded-xl shadow-lg lg:flex-3 lg:mr-24"
                            />
                        </div>
                    </div>

                    <div className="font-playfair text-center border-box px-4 flex-1 gap-10 flex flex-col justify-between items-center pr-4 pb-12">
                        <h1 className="font-semibold text-4xl" >{product?.name}</h1>
                        <h1 className="font-semibold font-poppin text-3xl text-green-600" >Price :- &#8377; {product?.price}</h1>
                        <div className="flex border-box w-full gap-4 justify-center items-center">
                            <button onClick={() => router.push('/cart')} className="bg-red-200 border border-red-200 active:scale-90 rounded lg:hover:scale-125 flex-1 duration-300 font-semibold text-primary shadow text-xl px-3 py-4" >Go To Cart</button>
                            <ProductConfig productId={id.productId} />
                        </div>
                        <h1>{product?.description}</h1>
                        <h1 className="font-semibold text-4xl">Reviews</h1>
                        <div className="flex flex-wrap gap-4">
                            {
                                product?.reviews?.map((review, index) => {
                                    return (<div key={index}>
                                        <h1 className="bg-white rounded shadow p-2" >{review}</h1>
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