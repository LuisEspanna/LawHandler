import {types} from '../actions/';

const initState = []

function reducer( state = initState, action ) {
    
    switch ( action.type ) {
        case types.LOAD_TITLES:
            return action.payload
        
            case types.REMOVE_TITLE:
                return state.filter(title => title.id !== action.payload);
            
        default:
            return state;
    }
}

export default reducer;
