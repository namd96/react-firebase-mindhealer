import { onSnapshot } from "@firebase/firestore";

export const snapShotPromiseResolver = (q, callback) => {
    onSnapshot(q, (querySnapshot) => {
        const snapShotData = [];
       if(!querySnapshot){
        //    reject(false);
           return
       }
        querySnapshot.forEach((doc) => {
            snapShotData.push(doc.data());
          });
          callback(snapShotData)
          console.log("data fetched from DB: ",snapShotData);
      });
}