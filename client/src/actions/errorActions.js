import {GET_ERRORS,CLEAR_ERRORS} from "./constants";

//Return Erros
export const returnErrors = (msg, status, id =null) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status, id}
    };
};

//Clear Erros
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};