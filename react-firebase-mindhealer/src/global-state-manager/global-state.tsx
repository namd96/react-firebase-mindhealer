import React, { useState } from 'react';
import GlobalContext from './global-context';

const GlobalState = props => {
  const [userDetails, setUserDetails] = useState({
    type: "seeker",
    userId: "", 
    isLoggedIn: false
  });
  const [userProfile, setUserProfile] = useState({
    type: "seeker", // trainer
    name: 'Unknown',
    _id:'',   // profile id
    _uid: '' ,// auth user id
    available:false ,// for both
    mode:'picky',//auto only for trainer
  })
  const [loggedIn, setAuth] = useState(false)
  const setUserDetailsForApp = userObj => {
    setUserDetails(userObj)
  }
  return (
    <GlobalContext.Provider
      value={{
        userDetails, setUserDetailsForApp,
        userProfile, setUserProfile:a=>setUserProfile(a),
        loggedIn, setAuth:a=>setAuth(a)
      }}
    > {props.children}</GlobalContext.Provider>)
}

export default GlobalState;