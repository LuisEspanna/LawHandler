import {types} from '../index';


export const startLoadingTitles = () => {
    return async ( dispatch ) => {
        fetch('/api/titles').then(res => {
            if(res.ok)return res.json();
        }).then(data => {
            dispatch( loadTitles( data ) );
            //console.log(data);
        });
    }
 }
 


export const loadTitles = (titles) => ({
    type: types.LOAD_TITLES,
    payload: titles
})

export const removeTitle = (id) => ({
    type: types.REMOVE_TITLE,
    payload: id
})
 