import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/reducer.js';
import thunk from 'redux-thunk';

const composed = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

const store = createStore(
    rootReducer, 
    composed
    );

export default store;
