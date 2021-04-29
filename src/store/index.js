import { createStore, applyMiddleware } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"//调式工具

import rootReducer from "./reducers"//根reducers

import createSagaMiddleware from "redux-saga"//引入saga中间件

import rootSaga from "./sage"

let sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);