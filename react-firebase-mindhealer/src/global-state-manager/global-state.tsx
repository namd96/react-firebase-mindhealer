import React, { useState } from 'react';
import GlobalContext from './global-context';

const GlobalState = props => {
    const [userType, setUserType] = useState("seeker")
  const setUserTypeForApp = type => {
    setUserType(type)
  }
    return (
        <GlobalContext.Provider
        value={{
            userType, setUserTypeForApp
        }}
        > {props.children}</GlobalContext.Provider>)
}

export default GlobalState;