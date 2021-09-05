import React, { useState } from 'react';
import GlobalContext from './global-context';

const GlobalState = props => {

  const [userProfile, setUserProfile] = useState({
    type: "seeker", // trainer
    name: 'Unknown',
    _id:'',   // profile id
    _uid: '' ,// auth user id
    available:false ,// for both
    mode:'picky',//auto only for trainer,
    isSeeker : true
  })
  const [loggedIn, setAuth] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
       userProfile, setUserProfile:a=>setUserProfile({...a,
        isSeeker: a.type=="seeker"
        }),
        loggedIn, setAuth:a=>setAuth(a)
      }}
    > {props.children}</GlobalContext.Provider>)
}

export default GlobalState;