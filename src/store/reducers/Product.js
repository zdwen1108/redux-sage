let defaultState = {
    isFetching: true,
    data: [],
    err: null
}

export default function Product(state = defaultState, action) {
    let { type, payload } = action;
    switch (type) {
        case "FETCH_PRODUCT_REQ":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_PRODUCT_SUCCESS":
            return Object.assign({}, state, { isFetching: false, data: payload.data })
        case "FETCH_PRODUCT_FAILURE":
            return Object.assign({}, state, { isFetching: false, data: [], err: payload.err })
        default:
            return { ...state }
    }
}