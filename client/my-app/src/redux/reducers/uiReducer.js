import {types} from '../actions/';

const initState = {
    main_loading: false,
}

function reducer( state = initState, action ) {
    
    switch ( action.type ) {
        case types.SET_MAIN_LOADING:
            return {
                ...state,
                main_loading: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
