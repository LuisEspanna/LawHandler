const initState = {
    main_loading: false,
}

function reducer( state = initState, action ) {
    
    switch ( action.type ) {
        case "[ui] loading":
            return {
                ...state,
                main_loading: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
