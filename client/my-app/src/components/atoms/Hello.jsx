import React from 'react';
import {useEffect, useState} from 'react';


export default function Hello(){
    const [initialState, setInitialState] = useState([]);

    useEffect(()=>{
        fetch('/api/').then(res => {
            return res.json();
        }).then(jsonRes => setInitialState(jsonRes))
    }, []);

    console.log(initialState);

    return(
        <div>Hello react!
        {
            initialState.map((name,i) =>{
                return(
                    <div key={i}>{name.user1}</div>
                )
            })
        }
        </div>
    )
}