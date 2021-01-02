import React from 'react';
import {useEffect, useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';

//actions
import {setMainLoading} from '../../redux/actions/ui/ui';


export default function Hello(){
    const dispatch = useDispatch();
    const [initialState, setInitialState] = useState([]);
    const main_loading = useSelector( state => state.ui.main_loading );

    useEffect(()=>{

        dispatch(setMainLoading(true)) ;

        fetch('/api/').then(res => {
            return res.json();
        }).then(jsonRes => {
            setInitialState(jsonRes);
            dispatch(setMainLoading(false)) ;
        })
    }, [dispatch]);

    console.log(initialState);

    return(
        <div>Hello react!
            <div>
                {
                    main_loading+""
                }
            </div>
            <div>
            {
                initialState.map((name,i) =>{
                    return(
                        <div key={i}>{name.user1}</div>
                    )
                })
            }
            </div>
        </div>
    )
}