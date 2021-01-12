import {types} from '../actions/';

const initState = []

function reducer( state = initState, action ) {
    
    switch ( action.type ) {
        case types.LOAD_TITLES:
            return action.payload
            
        default:
            return state;
    }
}

export default reducer;
