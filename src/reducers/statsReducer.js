import { FETCH_STATS } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_STATS:
            return action.payload;
        default:
            return state;
    }
}