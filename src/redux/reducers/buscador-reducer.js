import {NEW_SEARCH} from '../types';

const initialState = {
    tipo : '',
    valor: ''
};

const buscadorReducer = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case NEW_SEARCH :
            return action.payload;
        default :
            return state
    }
}
export default buscadorReducer;