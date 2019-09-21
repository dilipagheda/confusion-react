import {createStore, combineReducers} from 'redux';
import { dishes } from './dishes';
import { leaders } from './leaders';
import {promotions} from './promotions';
import {comments} from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:dishes,
            promotions:promotions,
            leaders:leaders,
            comments:comments
        })
    );

    return store;
}