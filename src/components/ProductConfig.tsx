import React from 'react'
import { useRemoveFromcartMutation, useAddToCartMutation } from '@/redux/slice/cart';
import { useAppSelector } from "@/redux/hooks";

function ProductConfig({ productId }: { productId: any }) {

  const general = useAppSelector((state) => state.general)
  const removeCart = useRemoveFromcartMutation();
  const addCart = useAddToCartMutation();
  const [isLoading, setIsloading] = React.useState(false);

  var currentCart = general.cart.filter((current: any) => current.productId === productId);
  var currentCartLenght = currentCart?.length;

  const addTocart = async () => {
    setIsloading(true)
    if (general._id === '') {
      alert('Create Account To Add to Cart');
      return;
    }
    await addCart[0]({ userId: general._id, productId });
    setIsloading(false)
  }
  const removeFromCart = async () => {
    setIsloading(true)
    if (general._id === '') {
      alert('Create Account To Add to Cart');
      return;
    }
    await removeCart[0]({ userId: general._id, productId })
    setIsloading(false)
  }

  return (
    <>
      {
        isLoading ?
          <div
            className="bg-purple-600 flex-1 border-box flex justify-around lg:w-[40%] m-auto items-center rounded font-semibold text-white shadow " >
            <button
              disabled
              className="bg-purple-600 flex-1 rounded font-semibold text-white text-2xl shadow p-3" >
              Loading...
            </button>
          </div>
          :
          currentCartLenght === 0 ?

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