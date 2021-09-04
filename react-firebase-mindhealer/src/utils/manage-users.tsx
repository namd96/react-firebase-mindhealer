import { collection, addDoc } from "firebase/firestore"; 
import {auth, db} from "../config/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged, sendSignInLinkToEmail, signInAnonymously } from "firebase/auth";
import Router  from "next/dist/client/router";

export const unsub = onSnapshot(doc(db,"users", "seekers"), (doc) => {
    console.log("Current data: ", doc.data());
});

 export async function addUsers (payload,isTypeSeekerOrTrainer)  {  
   const docRef = await addDoc(collection(db, isTypeSeekerOrTrainer || "seekers"), payload);
        // console.log("Document written with ID: ", docRef.id);
      
}
 export async function getTrainers ()  {
    try {
        const docRef = await addDoc(collection(db, "trainers"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function signInUsers_ (email) {
  var actionCodeSettings = {
    url: 'https://react-firebase-mindhealer.web.app' + email,
    handleCodeInApp: true,
  };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error", error);
    
    // ...
  });
 
}