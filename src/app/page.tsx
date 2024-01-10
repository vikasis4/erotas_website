"use client"

import { useAppSelector, useAppDispatch } from '@/redux/hooks'

export default function Home() {

  const count = useAppSelector((state) => state.account)
  // console.log(count);
  

  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="font-bold text-4xl">
        Home Page
      </h1>
    </div>
  )

}
