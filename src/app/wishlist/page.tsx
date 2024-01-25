'use client'
import React from 'react'
import useWishList from '@/hooks/wishlist/useWishList'
import Wishlist from '@/components/product/Wishlist';

function page() {

    const { getWishList, removeFromWishList } = useWishList();
    const wishList = getWishList();

  return (
    <div className="my-6 flex flex-col gap-8">
        {
            wishList.map((product)=> (<Wishlist product={product} removeFromWishList={removeFromWishList} />))
        }
    </div>
  )
}

export default page