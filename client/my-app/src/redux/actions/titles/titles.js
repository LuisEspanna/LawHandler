import {types} from '../index';
import {postData} from '../../../utils';
import {setAlert, setMainLoading} from '../ui/ui';

import { URL_BASE } from '../../../urls';

export const startUpload = (titles) => {
    return async ( dispatch ) => {
        dispatch(setMainLoading(true));
        postData(`${URL_BASE}/api/titles`, titles)
        .then(data => {
            //console.log(data);
            dispatch(setMainLoading(false));
            dispatch(setAlert(true,"Cambios guardados con éxito"));
        });
    }
}


export const startLoadingTitles = () => {
    return async ( dispatch ) => {
        dispatch(setMainLoading(true));
        fetch(`${URL_BASE}/api/titles`).then(res => {
            if(res.ok)return res.json();
        }).then(data => {
            dispatch( loadTitles( data ) );
            dispatch(setMainLoading(false));
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

export const updateTitle = (title) => ({
    type: types.UPDATE_TITLE,
    payload: {
        ...title
    }
})

export const addTitle = (title) => ({
    type: types.ADD_TITLE,
    payload: {
        ...title
    }
})

export const removeChapter = (id, titleId) => ({
    type: types.REMOVE_CHAPTER,
    payload: {
        id,
        titleId
    }
})
 