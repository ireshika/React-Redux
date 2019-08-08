import { FETCH_FEEDS } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_FEEDS:
            return action.payload;
        default:
            return state;

    }
};