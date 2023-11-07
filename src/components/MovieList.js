/*eslint-disable*/
import React from 'react';
import { useStores } from '../state/Context';
import {toJS} from "mobx";

function MovieList(props){

    const {movieStore} = useStores();

    
    
    return (
        <div className="MovieList" key="jang"> 
        <h1>movie list</h1>
        
         {toJS(movieStore.movies).map((item)=>(

            <div className="list" key={item.title}>
                
                
                <p>{item.id}</p>
                <h3>{item.title}</h3>
                <p>{item.rate}</p> 
            </div>
         )
        )}
	    </div>
    );
}

export default MovieList;