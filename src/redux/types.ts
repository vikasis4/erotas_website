export type userTypes = {
    email: string,
    name: string,
    _id: string,
    otp: number,
    cart: [{
        name: string,
        price: number,
        productId: string
    }],
    tokens: [{
        token: string
    }]
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