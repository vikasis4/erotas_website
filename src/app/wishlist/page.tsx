'use client'
import React from 'react'
import useWishList from '@/hooks/wishlist/useWishList'
import ProductMap from '@/components/product/ProductMap';


function page() {

  const { getWishList } = useWishList();
  const wishList = getWishList();

  if (wishList.length === 0) {
    return (
        <>
            <h1 className="text-4xl font-playfair text-center flex h-full w-full py-24 justify-center items-center ">WishList is Empty</h1>
        </>
    )
}

  return (
    <div className="my-6 flex flex-col gap-8">
      {
        wishList.map((product) => (<ProductMap data={product} />))
      }
    </div>
  )
}

export default page