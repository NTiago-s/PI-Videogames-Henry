//* configuracion del store global
import { applyMiddleware, compose, createStore } from "redux";
import Reducer from "../Reducer/reducer";
import thunkMiddleware from 'redux-thunk'

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);


export default store;