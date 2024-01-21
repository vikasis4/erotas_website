import React from 'react'

function AddressCol({ name, title }: { name: string, title: string | number }) {
    return (
        <div className="flex gap-3 font-playfair text-black ">
            <h1 className="font-bold">{name}:</h1>
            <h1>&nbsp;{title}</h1>
        </div>
    )
}

export default AddressCol