"use client"

import ProductMap from '@/components/product/ProductMap';
import React from 'react';
import Image from 'next/image';
import useProducts from '@/hooks/products/useProducts';
import { loader, teddy, decor, cloth } from '@/config/images';
import Alert from '@/components/alerts/AlertHome';

export default function Home() {

  const { isLoading, products } = useProducts();


  return (
    <div className="flex flex-col text-xl  justify-center items-center">

      {/* <div className="flex text-xl font-semibold border-box w-full justify-center items-center py-12 font-playfair gap-8 lg:gap-28 lg:font-normal md:justify-center">
        <div onClick={() => window.scroll({ top: 800, behavior: "smooth" })} className='flex justify-center items-center flex-col cursor-pointer'>
          <Image src={teddy} alt="erota" height="46" width="46" />
          <h1>Soft Toys</h1>
        </div>
        <Alert title="Upcoming" description='Products of this category will appear soon' name="Clothing" img={cloth} />
        <Alert title="Upcoming" description='Products of this category will appear soon' name="Home Decor" img={decor} />
      </div> */}

      <div
        className="flex w-[92%] gap-8 flex-col justify-center items-center text-primary-foreground font-poppin bg-primary py-20 rounded-xl shadow-lg">
        <h1 className="text-2xl">Exclusive Teddy Sales Event</h1>
        <h1 className="text-5xl lg:text-8xl font-bold lg:font-normalz">Upto 50% off</h1>
        <h1 className="text-2xl">Great deals at best price!</h1>
      </div>

      <h1 className="font-playfair mt-24 text-5xl md:text-6xl  mb-8">Top Products</h1>

      <div className="py-12 border-box px-2 md:px-4 flex justify-center items-center gap-6 md:gap-14 flex-wrap">
        {
          isLoading ?
            <Image src={loader} alt="Loading..." height={100} width={100} />
            :
            products?.map(product => { return <ProductMap key={product.productId} data={product} /> })
        }
      </div>
    </div>
  )

}
