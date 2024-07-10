"use client"

import ProductMap from '@/components/product/ProductMap';
import React from 'react';
import Image from 'next/image';
import useProducts from '@/hooks/products/useProducts';
import { loader } from '@/config/images';
import FilterSection from '@/components/FilterSection';

export default function Home() {

  const { isLoading, products } = useProducts();


  return (
    <div className="flex flex-col text-xl  justify-center items-center">
      <div
        className="flex w-[92%] bg-slate-600
          bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../assets/image/pic2.jpg')]
          lg:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../assets/image/pic1.jpg')]
          bg-cover px-2 lg:bg-contain gap-8 flex-col justify-center items-center text-primary-foreground  font-poppin py-32 mt-4 rounded-xl shadow-lg">
        <h1 className="text-3xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">Exclusive Teddy & Home Decor Sales</h1>
        <h1 className="text-5xl lg:text-8xl text-center font-bold lg:font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">Upto 50% off</h1>
        <h1 className="text-3xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">Great deals at best price!</h1>
      </div>

      <h1 className="font-playfair mt-24 text-5xl md:text-6xl  mb-8">Top Products</h1>

      <div className="py-12 border-box px-2 md:px-4 flex flex-col md:flex-row justify-around items-start gap-6 md:gap-14">
        <FilterSection />
        <div className='flex justify-around md:justify-start md:gap-8 items-start h-full w-full flex-wrap'>
          {
            isLoading ?
              <Image src={loader} alt="Loading..." height={100} width={100} />
              :
              products?.map((product: any) => { return <ProductMap key={product.productId} data={product} /> })
          }
        </div>
      </div>
    </div>
  )

}
