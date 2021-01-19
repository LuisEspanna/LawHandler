import {types} from '../index';
import {searchByKeyword} from '../../../utils';

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
 

export const search = (titles, word) => {
    return async ( dispatch ) => {
        dispatch(setResults(searchByKeyword(titles, word)));
    }
}