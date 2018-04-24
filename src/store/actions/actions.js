export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// so called action creators to help handling 
// async actions with Redux

export const increment = () => {
    // must return an action
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (value) => {
    return {
        type: ADD,
        value
    };
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        value
    };
};

export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
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
        type: DELETE_RESULT,
        id
    };
};
