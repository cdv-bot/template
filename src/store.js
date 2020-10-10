import { applyMiddleware, compose, createStore } from 'redux';
import reducts from './reducers';
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducts,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;