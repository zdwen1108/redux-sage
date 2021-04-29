import { put, call, takeLatest, delay } from "redux-saga/effects"
import * as actions from "../actions/product"
import { getProductApi } from "../../api"
import * as types from "../type/product"

export default function* watchFetchProductFlow() {
    // 参数1 想要拦截的action类型 参数2 传入generator处理函数
    yield takeLatest(types.FETCH_PRODUCT, getProductData)
}

function* getProductData() {
    // 正在发起请求 提取action通知reducer进行更改
    yield put(actions.getProdutReq());
    // delay(2000)
    try {
        // call可以调用请求的api
        let res = yield call(getProductApi, "马尔扎哈");
        yield put(actions.getProductSuccess({ data: res.data }))
        // console.log(res);
    } catch (err) {
        err = err.toString();
        // 数据拉取失败
        yield put(actions.getProductFailure({ err }))
    }
}