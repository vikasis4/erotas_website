'use client'
import React from 'react'
import useCart from '@/hooks/cart/useCart';
import useAddTocart from '@/hooks/cart/useAddToCart';
import useRemoveFromCart from '@/hooks/cart/useRemoveFromCart'

function ProductConfig({ productId }: { productId: any }) {

  const cart = useCart();
  var addToCart = useAddTocart();
  var removeFromCart = useRemoveFromCart();
  var currentCart = cart.filter((current: any) => current.productId === productId);

  return (
    <>
      {
        currentCart.length === 0 ?

          <button
            onClick={() => addToCart(productId)}
            className="bg-primary-foreground text-primary border-primary px-10 py-4 md:px-6 md:py-2  rounded-md hover:bg-primary hover:border hover:border-primary border hover:text-white transition-colors duration-600" >
            Add to Cart
          </button>
          :
          <div
            className="bg-primary-foreground flex gap-4 text-primary border-primary px-10 py-4 md:px-6 md:py-2  rounded-md hover:bg-primary hover:border hover:border-primary border hover:text-white transition-colors duration-600" >
            <button
              onClick={() => removeFromCart(productId)}
            >
              -
            </button>
            <h1>{currentCart ? currentCart[0].qty : 0}</h1>
            <button
              onClick={() => addToCart(productId)}
            >
              +
            </button>
          </div>
      }
    </>
  )
}

export default ProductConfig