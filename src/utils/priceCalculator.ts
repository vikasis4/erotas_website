const priceCalc = (cart: any) => {
    var price = 0;

    if (cart) {
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < cart[i].qty; j++) {
                price = price + cart[i].price
            }
        }
    }
    return price;
}

export default priceCalc