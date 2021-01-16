
const initState = {
    users:[],
    admin:{
        username:'luis',
        image:'/'
    }
}

function reducer( state = initState, action ) {
    
    switch ( action.type ) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
