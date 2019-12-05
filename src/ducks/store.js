import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  budget: budgetReducer
  ,user: userReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))

export default store;
