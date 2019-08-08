import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import usersReducers from './usersReducers';
import feedReducer from './feedReducer';
import serachUserReducer from './serachUserReducer';
import imageReducer from './imageReducer';
import statsReducer from './statsReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    user: usersReducers,
    feed: feedReducer,
    userSearch: serachUserReducer,
    image: imageReducer,
    stats: statsReducer
});