import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware , combineReducers} from "redux"
import thunk from "redux-thunk";
import { GitReducer } from "./Reducer.js";
const rootReducer = combineReducers({
  Git:GitReducer,

})

const store = createStore(
    rootReducer,
   {} ,
   composeWithDevTools(applyMiddleware(thunk)))
export default store