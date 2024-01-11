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