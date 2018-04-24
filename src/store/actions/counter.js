import * as actionTypes from './actionTypes';

// so called action creators to help handling 
// async actions with Redux

export const increment = () => {
    // must return an action
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value
    };
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        value
    };
};
