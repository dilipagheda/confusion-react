import {createStore, combineReducers,applyMiddleware} from 'redux';
import { dishes } from './dishes';
import { leaders } from './leaders';
import {promotions} from './promotions';
import {comments} from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:dishes,
            promotions:promotions,
            leaders:leaders,
            comments:comments
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}