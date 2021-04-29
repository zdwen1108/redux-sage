
import * as types from "../type/product"

export const createAction = type => (payload = {}) => ({ type, payload })
// 关于product的actions

// 发起请求
export const getProduct = createAction(types.FETCH_PRODUCT)
// 正在获取购物车商品
export const getProdutReq = createAction(types.FETCH_PRODUCT_REQ)
// 获取购物车商品成功
export const getProductSuccess = createAction(types.FETCH_PRODUCT_SUCCESS)
// 获取购物车商品失败
export const getProductFailure = createAction(types.FETCH_PRODUCT_FAILURE)
// 添加商品到购物车
export const addToCart = createAction(types.ADD_TO_CART)
