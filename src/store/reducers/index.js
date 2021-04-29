import Product from "./Product"

let defaultSate = {}

export default (state = defaultSate, action) => {
    return {
        Product: Product(state.Product, action)
    }
}