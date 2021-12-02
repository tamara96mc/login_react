import {CHANGE_SUBMENU} from '../types';

const initialState = {
    bloque: ''
};

const submenuReducer = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case CHANGE_SUBMENU :
            return action.payload;
        default :
            return state
    }
}
export default submenuReducer;