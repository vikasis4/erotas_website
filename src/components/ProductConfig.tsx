import React from 'react'
import { useRemoveFromcartMutation, useAddToCartMutation, useGetCartQuery } from '@/redux/slice/cart';
import { useAppSelector } from "@/redux/hooks";

function ProductConfig({ productId }: { productId: any }) {

  const userId = useAppSelector((state) => state.general._id);
  const cart = useGetCartQuery(userId);
  const removeCart = useRemoveFromcartMutation();
  const addCart = useAddToCartMutation();
  var currentCart = cart.data?.cart.filter((current: any) => current.productId === productId);
  var currentCartLenght = currentCart?.length;

  const addTocart = () => {
    addCart[0]({ userId, productId })
  }
  const removeFromCart = () => {
    removeCart[0]({ userId, productId })
  }

  return (
    <>
      {
        currentCartLenght === 0 ?

          <button
            onClick={addTocart}
            className="bg-purple-600 hover:scale-125 duration-300 rounded font-semibold text-white shadow py-2 px-8" >
            Add to Cart
          </button>
          :
          <div
            className="bg-purple-600 flex justify-around w-36 items-center rounded font-semibold text-white shadow py-2 px-8" >
            <button onClick={addTocart}>
              +
            </button>
            <h1>{currentCart ? currentCart[0].qty : 0}</h1>
            <button onClick={removeFromCart}>
              -
            </button>
          </div>
      }
    </>
  )
}

export default ProductConfig