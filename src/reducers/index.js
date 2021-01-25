import counterReducer from './counter'
import isLoggedReducer from './isLogged'
import { combineReducers } from 'redux'

//combining all reducer making a root reducer because we cannot pass multiple reducers to store at a time 
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer

});
export default allReducers