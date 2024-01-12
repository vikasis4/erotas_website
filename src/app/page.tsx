"use client"

import ProductMap from '@/components/ProductMap';
import React from 'react';
import Image from 'next/image';
import { useFetchProductsQuery } from '@/redux/slice/products/index'

export default function Home() {

  const {isLoading, data } = useFetchProductsQuery('');
  var product = data?.product;
  

  return (
    <div className="flex flex-col text-xl  justify-center items-center">

      <ul className="flex gap-8 py-12 font-poppin">
        <li>Soft Toys</li>
        <li>Clothing</li>
        <li>Home Decor</li>
      </ul>

      <div className="bg-red-600 w-[60rem] h-96 rounded-xl shadow-lg"></div>

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
