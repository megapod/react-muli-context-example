import React, { createContext } from 'react'

export const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
     return (
      <AuthContext.Provider value={{isLogged: true}}>
        {props.children}  
      </AuthContext.Provider>
    );
}