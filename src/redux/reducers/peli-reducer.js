import {SELECT_PELI, ORDER_PELI} from '../types';

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

        default :
            return state
    }
}
export default peliReducer;