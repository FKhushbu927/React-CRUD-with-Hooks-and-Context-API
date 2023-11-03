import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'
import Createarticle from './../component/Createarticle';

const initialState = {
    article: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (<GlobalContext.Provider value={{
        article: state.article,
        Createarticle,
    }}
    
    >
        
    {children}


    </GlobalContext.Provider>);
}