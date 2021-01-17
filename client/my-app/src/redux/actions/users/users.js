import {types} from '../index';


export const startLogin = (user) => {
    return async ( dispatch ) => {
        fetch('/api/users',
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(user) // body data type must match "Content-Type" header
          }
        ).then(res => {
            if(res.ok)return res.json();
        }).then(data => {
            dispatch( setUser( user ) );
            console.log(data);
        });
    }
}
 

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
})



 