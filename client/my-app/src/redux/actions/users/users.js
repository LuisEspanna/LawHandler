import {types} from '../index';
import {postData} from '../../../utils';


export const startLogin = (user) => {
    return async ( dispatch ) => {
        postData('/api/login', user)
            .then(data => {
            if(data.status === 'ok'){
                dispatch(setUser(data.data));
            }else{
                alert(data.status);
            }           
        });
    }
}
 

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
})

export const setProfession = (profession) => ({
    type: types.SET_PROFESSION,
    payload: profession
})



 