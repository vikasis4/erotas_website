'use client'
import Image from 'next/image'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import { loader } from '@/config/images'


function Loader() {

    const general = useAppSelector((state) => state.general)

    return (
        <>
            {
                general.isLoading ?
                    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-70">
                        <Image src={loader} alt="Loading..." height={120} width={120} className='rounded-md' />
                    </div>
                    :
                    <div className='hidden'>
                        <Image src={loader} alt="Loading..." height={0} width={0} className='hidden' />
                    </div>
            }
        </>
    )
}

export default Loader