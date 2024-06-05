import { productTypes } from '@/redux/types'
import React from 'react'

function Description({ description }: any) {

    return (
        <div className="flex flex-col justify-center items-start w-full">
            <h1 className="font-bold text-2xl pb-2">
                {description.heading}
            </h1>
            {
                description.text.map((text:any, index:number) => (<h1 className="font-poppin text-left" key={index}>{text}</h1>))
            }

        </div>
    )
}

export default Description