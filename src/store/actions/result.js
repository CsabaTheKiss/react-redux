import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        resultToStore: result
    };
}

export const storeResult = (result) => {
    // here 'dispatch' availabe becouse of thunk middleware. See index.js
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000)
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id
    };
};