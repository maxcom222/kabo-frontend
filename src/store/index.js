// src/store/index.js

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const initialiseSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const loggerMiddleware = createLogger()

const middleware = [
  initialiseSagaMiddleware,
  loggerMiddleware,
]

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(...middleware),
  ),
)

initialiseSagaMiddleware.run(rootSaga)

export default store
