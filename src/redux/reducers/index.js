import {combineReducers} from 'redux';
import credentials from './credentials-reducer';
import peli from './peli-reducer';
import buscador from './buscador-reducer';
import submenu from './submenu-reducer';


const rootReducer = combineReducers({
    credentials,
    peli,
    buscador,
    submenu
});

export default rootReducer;