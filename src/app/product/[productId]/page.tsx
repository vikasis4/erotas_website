'use client'
import { useParams, useRouter } from "next/navigation"
import React from "react";
import { useFetchProductQuery } from '@/redux/slice/products/index'
import Image from "next/image";
import { ProductBaseURL } from "@/config/apis";
import ProductConfig from "@/components/ProductConfig";

export default function Page() {

    const id = useParams();
    const [currentImage, setCurrentImage] = React.useState(0);
    const { isLoading, data } = useFetchProductQuery(id.productId);
    const router = useRouter()

    if (data?.status === 'false') {
        return <h1 className="flex justify-center items-center h-full w-full font-poppin text-4xl text-red-600">Something went wrong...</h1>
    }


    ///////////////////////////////////////// IMAGE LOADERS ///////////////////////////////////
    const myLoader = () => {
        return ProductBaseURL + data?.product?.imagesLink[currentImage];
    }
    const newLoader = (index: number) => {
        return ProductBaseURL + data?.product?.imagesLink[index];
    }

    return (
        <>
            {
                isLoading ?
                    <div className="flex justify-center items-center h-full w-full">
                        <Image src={require('../../../assets/image/loader.gif')} className="rounded-xl" alt="Loading" height="200" width="200" />
                    </div>
                    :
                    <div className="flex lg:flex-row flex-col justify-between mt-12 gap-12 lg:gap-0">

                        <div className="flex lg:flex-row border-box flex-col-reverse flex-1 justify-center items-center lg:items-start lg:gap-10">
                            <div className="flex lg:flex-1 justify-center items-center gap-8 mt-12 lg:flex-col w-full">
                                {
                                    data?.product?.imagesLink?.map((link, index) => {
                                        return (<div key={index}>
                                            <Image onClick={() => setCurrentImage(index)} loader={() => newLoader(index)} src={ProductBaseURL + data?.product.imagesLink[index]} alt="product" height="50" width="50"
                                                className="rounded-xl h-20 w-20 shadow-lg lg:hover:scale-[2.5] hover:cursor-pointer duration-300"
                                            />
                                        </div>)
                                    })
                                }
                            </div>
                            <div>
                                <Image loader={myLoader} src={ProductBaseURL + data?.product?.imagesLink[0]} alt="product" height="300" width="300"
                                    className="rounded-xl shadow-lg lg:flex-3 lg:mr-24"
                                />
                            </div>
                        </div>

                        <div className="font-poppin text-center border-box px-4 flex-1 gap-10 flex flex-col justify-between items-center pr-4 pb-12">
                            <h1 className="font-semibold text-xl" >{data?.product?.name}</h1>
                            <h1 className="font-semibold text-3xl text-green-600" >Price :- &#8377; {data?.product?.price}</h1>
                            <div className="flex border-box w-full gap-4 justify-center items-center">
                                <button onClick={() => router.push('/cart')} className="bg-red-600 rounded lg:hover:scale-125 flex-1 duration-300 font-semibold text-white shadow text-xl p-3" >Go To Cart</button>
                                <ProductConfig productId={id.productId} />
                            </div>
                            <h1>{data?.product?.description}</h1>
                            <div className="flex flex-wrap gap-4">
                                <h1 className="font-semibold text-2xl">Reviews</h1>
                                {
                                    data?.product?.reviews?.map((review, index) => {
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