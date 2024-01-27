export type userTypes = {
    email: string,
    name: string,
    _id: string,
    otp: number,
    price: number,
}
export type productTypes = {
    _id: string,
    productId: String,
    name: String,
    price: number,
    description: { heading: String, text: String[] }[],
    imagesLink: string[],
    reviews: string[],
    searchWords: string[]
}
export type cartType = {
    productId: String | undefined,
    name: String | undefined,
    price: number | undefined,
    imageLink: String | undefined,
    qty: number | undefined
}


export type AddressType = {
    _id: string
    address: string,
    pincode: number,
    city: string,
    state: string,
    phone: number,
    landMark: string
}

export interface GenralState {
    isLoading: boolean,
    isAuthenticated: boolean,
    addressId: string
}

export type OrderType = {
    userId: string,
    paymentId: string,
    orderId: string,
    price: number,
    trackingLink: string,
    shipmentCreated: boolean,
    delivered: boolean,
    created_at: Date,
    updated_at: Date,
    products: {
        name: string,
        price: number,
        productId: string,
        imageLink: string,
        qty: number
    }[],
    address: {
        address: string,
        pincode: number,
        city: string,
        state: string,
        phone: number,
        landMark: string
    },
}

export type SupportType = {
    phone: number,
    userId: string,
}

export type wishListType = {
    productId: String | undefined,
    name: String | undefined,
    price: number | undefined,
    imageLink: String | undefined,
}