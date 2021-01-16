import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
}
from 'redux'
import thunk from "redux-thunk";

//Reducers
import uiReducer from "./reducers/uiReducer";
import titlesReducer from "./reducers/titleReducer";
import usersReducer from "./reducers/usersReducer";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui: uiReducer,
    titulos: titlesReducer,
    users: usersReducer
})

export default createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
