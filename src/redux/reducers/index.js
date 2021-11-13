import {combineReducers} from 'redux';
import credentials from './credentials-reducer';
import peli from './peli-reducer';


const rootReducer = combineReducers({
    credentials,
    peli
});

export default rootReducer;