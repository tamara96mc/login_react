import {NEW_SEARCH, RESET_SEARCH} from '../types';

const initialState = {
    tipo : '',
    valor: ''
};

const buscadorReducer = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case NEW_SEARCH :
            return action.payload;
        case RESET_SEARCH :
            return {
                tipo : '',
                valor: ''
            }
        default :
            return state
    }
}
export default buscadorReducer;