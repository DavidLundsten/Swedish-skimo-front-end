import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export function Store (initialState = {}) {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, loggerMiddleware)
    );
}