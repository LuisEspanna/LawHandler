import {types} from '../index';

export const setResults = ( results ) => ({
    type: types.LOAD_RESULTS,
    payload: results
})

export const addResult = ( title, result) => ({
    type: types.ADD_RESULT,
    payload: {
        title,
        result
    }
})

export const setCurrentResult = ( title, result) => ({
    type: types.ADD_RESULT,
    payload: {
        title,
        result
    }
})
 