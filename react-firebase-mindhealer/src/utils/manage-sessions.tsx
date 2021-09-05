import { addDoc, collection, updateDoc } from "@firebase/firestore";
import { doc, query, where } from "firebase/firestore";
import { db, COLS } from "../config/firebase-config";
import { snapshotListener } from "../helpers/snapshot-resolver";

export const createNewSession = async (seekerUID = null) => {
  // let seekerUid = 0;
  if (!seekerUID) throw { message: "seekerUID is required for newSession" }
  return await addDoc(collection(db, COLS.SESISONS), {
    requested_on: new Date(),
    started_on: null,
    ended_on: null,
    seeker_uid: seekerUID,
    trainer_uid: null,
    status: "pending"
  });
}
export const allSessionsListener = (callback) => {
  const q = query(collection(db, COLS.SESISONS),
    where("status", "==", "pending"))
  snapshotListener(q, callback)
}
export const mySessionsListener = (isSeeker,uid,callback) => {
  const q = query(collection(db, COLS.SESISONS),
    where("status", "==", "active"),
    where(isSeeker?"seeker_uid":"trainer_uid", "==", uid)
    )
  snapshotListener(q, (sessions)=>{
    console.log('[mySessionListener]',sessions);
    let latest = null;

    sessions.forEach((session, idx) => {
      if(!latest) latest = session;
      if(session.started_on.seconds>latest.started_on.seconds){
        latest =session;
      }
    });
    callback(sessions.length? latest:false)
  })
}
export const updateSession = async (session, trainerUID) => {
  if (!trainerUID) throw { message: "trainerUID is required for session start" }
  let sessionRef = doc(db, COLS.SESISONS, session._id)
  return await updateDoc(sessionRef, {
    ...session,
    status: "active",
    started_on: new Date(),
    trainer_uid: trainerUID
  });
}

export const endSession = async (session) => {
  // handle for a case where any trainer can end any other trainer's session
  console.log("session reff",session, COLS.SESISONS)
  let sessionRef = doc(db, COLS.SESISONS, session._id)
  return await updateDoc(sessionRef, {
    ...session,
    status: "ended",
    ended_on: new Date()
  });
}

export const updateTrainer = async (trainerID, available=false) => {
  let trainerRef = doc(db, COLS.USER_PROFILES, trainerID);
  console.log('trainer reff',trainerID, trainerRef);
  await updateDoc(trainerRef, {
    availability: available,
  });
}