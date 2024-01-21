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
            className="bg-white border border-box border-primary flex-1 lg:hover:scale-125 duration-300 rounded font-semibold text-black text-2xl shadow p-3" >
            Add to Cart
          </button>
          :
          <div
            className="bg-white border border-box border-primary flex-1 border-box flex justify-around lg:w-[40%] m-auto items-center rounded font-semibold text-black text-2xl shadow p-3" >
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