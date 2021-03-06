import { collection, getDocs, query, where } from '@firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { auth, db, COLS } from '../config/firebase-config';
import globalContext from '../global-state-manager/global-context';

const useSignIn = (props) => {
    const [authorized, setAuthorized] = useState(false)
    let payload = props;// initial payload
    const GlobalContext = useContext(globalContext)
    useEffect(() => {
        if (payload) {
            signInUsers(payload)
        }
    }, [payload])

    function signInUsers(payload) {
        var userObj = { _uid:"", _id:"" };

        // uc = await signInWithEmailAndPassword();
        // up = await getDocs(query())
        // soc = up.docs[0]

        return signInWithEmailAndPassword(auth, payload.un, payload.pw)
            .then(userCredential => {
                userObj = {
                    ...userObj,
                    _uid: userCredential.user.uid,
                    // email: userCredential.user.email
                }
                // query firestore/user-profiles to find type of this user
                return getDocs(query(
                    collection(db, COLS.USER_PROFILES),
                    where("_uid", "==", userObj._uid)
                ))
            })
            .then(userProfileSnaps => {
                if (userProfileSnaps.empty) {
                    // console.log('User profile not found');
                    throw { message: "User profile not found", ok: false };
                }
                let docSnap = userProfileSnaps.docs[0];
                userObj = {
                    ...userObj,
                    ...docSnap.data(), // type name _uid
                    ... { _id: docSnap.id ,
                    availability : docSnap.data().availability
                    }   // _id of profile
                };
                GlobalContext.setAuth(true);
                GlobalContext.setUserProfile(userObj);
                // Router.push("/");
            })
            .catch(anyError => {
                console.log('[uspw] [anyError]', anyError);
                throw anyError
            });
    }

    return [authorized, signInUsers]
}
export default useSignIn;