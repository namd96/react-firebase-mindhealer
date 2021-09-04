import { addDoc, collection } from "@firebase/firestore";
import { query, where } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { snapShotPromiseResolver } from "../helpers/snapshot-promise-resolver";

export const createNewSession = async(seekerId="1QVBbDRIhjr3AVuARYEr") => {
    const docRef = await addDoc(collection(db, "sessions"), {
        created_on: null,
        requested_on: new Date(),
        ended_on: null,
        seeker_id: seekerId,
        trainer_id: null,
        status: "pending"
      });
      console.log("Document written with ID: ", docRef.id);
}
export const getAllSessions = async(callback,seekerId="1QVBbDRIhjr3AVuARYEr") => {
  let trainerList;
  const q = query(collection(db, "sessions"),  where("status", "==", "pending"))
  trainerList =  await snapShotPromiseResolver(q, callback) 
      return trainerList
}