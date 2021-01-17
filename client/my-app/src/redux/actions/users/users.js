import {types} from '../index';
import {postData} from '../../../utils';


export const startLogin = (user) => {
    return async ( dispatch ) => {
        postData('/api/users', user)
            .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
            dispatch(setUser(user));
        });
    }
}
 

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
})



 