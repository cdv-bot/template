import { createStore } from 'redux';
import reducts from './reducers';

const store = createStore(
    reducts,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;