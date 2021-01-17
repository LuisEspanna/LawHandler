import {types} from '../actions/index';

const initState = {
    users:[],
    user:undefined
}

function reducer( state = initState, action ) {
    
    switch ( action.type ) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
