'use client'
import React from 'react'
import useWishList from '@/hooks/wishlist/useWishList'
import ProductMap from '@/components/product/ProductMap';

function page() {

  const { getWishList } = useWishList();
  const wishList = getWishList();

  return (
    <div className="my-6 flex flex-col gap-8">
      {
        wishList.map((product) => (<ProductMap data={product} />))
      }
    </div>
  )
}

export default page