import {SELECT_PELI, ORDER_PELI,REMOVE_ORDER} from '../types';

const initialState = {
    select_peli : '',
    pedido: ''
};

const peliReducer = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case SELECT_PELI :
            return {
                ...state,
                select_peli:action.payload
            };
        case ORDER_PELI :
                return {
                ...state,
                pedido:action.payload
                };
        case REMOVE_ORDER :
                return initialState;

        default :
            return state
    }
}
export default peliReducer;