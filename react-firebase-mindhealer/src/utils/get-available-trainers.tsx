import { query, collection, where, onSnapshot } from "@firebase/firestore";
import { db } from "../config/firebase-config";
import { snapShotPromiseResolver } from "../helpers/snapshot-promise-resolver";

export const getAvailableTrainers = async (callback) => {
   let trainerList;
    const q = query(collection(db, "trainers"),  where("status", "==", "busy"),  
    where("availability", "==", true),  
    where("preference", "==", "picky"))
    trainerList =  await snapShotPromiseResolver(q, callback) 
        return trainerList
}