
import * as types from "../type/product"

const createAction = type => payload => ({ type, payload })
// 关于product的actions

// 发起请求
const getProduct = createAction(types.FETCH_PRODUCT)
// 正在获取购物车商品
const getProdutReq = createAction(types.FETCH_PRODUCT_REQ)
// 获取购物车商品成功
const getProductSuccess = createAction(types.FETCH_PRODUCT_SUCCESS)
// 获取购物车商品失败
const getProductFailure = createAction(types.FETch_PRODUCT_FAILURE)
// 添加商品到购物车
const addToCart = createAction(types.ADD_TO_CART)
