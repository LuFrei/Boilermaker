import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import example from './reducers/example.js'

const store = createStore(combineReducers({example}), applyMiddleware(thunkMiddleware, createLogger()))

export default store;