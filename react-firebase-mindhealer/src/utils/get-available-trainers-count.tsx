import { query, collection, where, onSnapshot } from "@firebase/firestore";
import { db, COLS } from "../config/firebase-config";
import { snapshotListener } from "../helpers/snapshot-resolver";

export const trainersCountListener = async (callback) => {
    const q = query(collection(db, COLS.USER_PROFILES),
        where("availability", "!=", false),
        where("type", "==", 'trainer')
    )
    snapshotListener(q, (array) => {
        callback(array.length)
    })
}