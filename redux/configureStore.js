import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { places } from './places';
import { comments } from './comments';
import { promotions } from './promotions';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            places,
            comments,
            partners
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
