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
    description: string,
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

export interface GenralState {
    isLoading: boolean,
    isAuthenticated: boolean,
    email: string,
    name: string,
    _id: string,
    cart: cartType[]
}