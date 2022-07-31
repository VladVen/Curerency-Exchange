import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import HeaderReducer from "./reducers/headerReducer";
import bodyReducer from "./reducers/bodyReducer";

let reducers = combineReducers( {
    header: HeaderReducer,
    body: bodyReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));
export default store