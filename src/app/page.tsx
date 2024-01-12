"use client"

import ProductMap from '@/components/ProductMap';
import React from 'react';
import Image from 'next/image';
import { useFetchProductsQuery } from '@/redux/slice/products/index'

export default function Home() {

  const { isLoading, data } = useFetchProductsQuery('');
  var product = data?.product;


  return (
    <div className="flex flex-col text-xl  justify-center items-center">

      <ul className="flex gap-8 py-12 font-poppin">
        <li>Soft Toys</li>
        <li>Clothing</li>
        <li>Home Decor</li>
      </ul>

      <div className="flex gap-8 flex-col justify-center items-center text-white font-poppin bg-red-600 w-[60rem] py-20 rounded-xl shadow-lg">
        <h1 className="text-2xl">Exclusive Teddy Sales Event</h1>
        <h1 className="text-8xl">Upto 50% off</h1>
        <h1 className="text-2xl">Great deals at best price!</h1>
        <div className="flex justify-center items-center gap-10 mt-16">
          <h1 className='hover:translate-y-[-1rem] duration-300 hover:cursor-pointer bg-white text-black p-4 rounded font-normal'>Soft Toys</h1>
          <h1 className='hover:translate-y-[-1rem] duration-300 hover:cursor-pointer bg-white text-black p-4 rounded font-normal'>Giant Teddy</h1>
          <h1 className='hover:translate-y-[-1rem] duration-300 hover:cursor-pointer bg-white text-black p-4 rounded font-normal'>Cute Teddy</h1>
        </div>
      </div>

      <h1 className="font-poppin mt-24 text-6xl  mb-8">Top Products</h1>

      <div className="px-12 py-12 flex justify-center items-center gap-14 flex-wrap">
        {
          isLoading ?
            <Image src={require('../assets/image/loader.gif')} alt="Loading..." height={100} width={100} />
            :
            product?.map(product => { return <ProductMap key={product.productId} data={product} /> })
        }
      </div>
    </div>
  )

}
