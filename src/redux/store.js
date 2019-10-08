import { createStore, combineReducers } from 'redux'
import { doToReducer } from './reducers'
export default createStore(combineReducers({
  todos: doToReducer
}))