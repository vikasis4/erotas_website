import React from 'react'
import { useRemoveFromcartMutation, useAddToCartMutation, useGetCartQuery } from '@/redux/slice/cart';
import { useAppSelector } from "@/redux/hooks";

function ProductConfig({ productId }: { productId: any }) {

  const userId = useAppSelector((state:any) => state.general._id);
  const cart = useGetCartQuery(userId);
  const removeCart = useRemoveFromcartMutation();
  const addCart = useAddToCartMutation();
  var currentCart = cart.data?.cart.filter((current: any) => current.productId === productId);
  var currentCartLenght = currentCart?.length;

  const addTocart = () => {
    if (!userId) {
      alert('Create Account To Add to Cart');
      return;
    }
    addCart[0]({ userId, productId })
  }
  const removeFromCart = () => {
    if (!userId) {
      alert('Create Account To Add to Cart');
      return;
    }
    removeCart[0]({ userId, productId })
  }

  return (
    <>
      {
        currentCartLenght === 0 || !currentCartLenght ?

          <button
            onClick={addTocart}
            className="bg-purple-600 flex-1 lg:hover:scale-125 duration-300 rounded font-semibold text-white text-2xl shadow p-3" >
            Add to Cart
          </button>
          :
          <div
            className="bg-purple-600 flex-1 border-box flex justify-around lg:w-[40%] m-auto items-center rounded font-semibold text-white text-2xl shadow p-3" >
            <button onClick={removeFromCart}>
              -
            </button>
            <h1>{currentCart ? currentCart[0].qty : 0}</h1>
            <button onClick={addTocart}>
              +
            </button>
          </div>
      }
    </>
  )
}

export default ProductConfig