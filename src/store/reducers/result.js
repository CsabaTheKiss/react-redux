import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
        console.log('result reducer STORE_RESULT, action: ', action);
            return { 
                ...state,
                results: state.results.concat({id: new Date() + Math.random(), value: action.resultToStore}) 
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.id)
            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }
}

export default reducer;
