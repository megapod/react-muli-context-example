import React, { createContext } from 'react'

export const ProfileContext = React.createContext();

export const ProfileContextProvider = (props) => {
     return (
      <ProfileContext.Provider value={{name: 'Yehuda'}}>
        {props.children}  
      </ProfileContext.Provider>
    );
}