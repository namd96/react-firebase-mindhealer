import { signInAnonymously, onAuthStateChanged } from '@firebase/auth';
import Router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase-config';
import globalContext from '../global-state-manager/global-context';
import { addUsers } from '../utils/manage-users';
const useSignIn = (props) => {
    const [authorized, setAuthorized] = useState(false)
  let  {payload} = props;
  const GlobalContext = useContext(globalContext)
  useEffect(()=>{
      if(payload){
          
          signInUsers(payload)
        }
    },[payload])  
    function signInUsers (payload) {
        signInAnonymously(auth)
        .then(() => {
            // Signed in..
            console.log("isTypeSeekerOrTrainerisTypeSeekerOrTrainer",payload);
            console.log(".....signed in....")
            onAuthStateChanged(auth, (user) => {
              if (user) {
                const uid = user.uid;
                console.log(uid);
                localStorage.setItem("uid", uid);
                addUsers({...payload, uid}, payload.user_type);
                setAuthorized(true);
                GlobalContext.setUserTypeForApp(payload.user_type)
                Router.push("/");
              } else {
              }
          })
        })
        }
    return [authorized, signInUsers]
}
export default useSignIn;