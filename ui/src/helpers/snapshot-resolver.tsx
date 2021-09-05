import { onSnapshot } from "@firebase/firestore";

export const snapshotListener = (q, callback) => {
   return onSnapshot(q, (querySnapshot) => {
        const snapShotData = [];
        if (!querySnapshot) {
            callback([])
            return;
        }
        querySnapshot.forEach((doc) => {
            //console.log("snapShotData", doc);
            snapShotData.push({ ...doc.data(), _id: doc.id });
        });
        callback(snapShotData)
        // console.log("data fetched from DB: ", snapShotData);
    });
}