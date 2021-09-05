import React, { useContext, useEffect, useState } from "react";
import { trainersCountListener } from "../../../../utils/get-available-trainers-count";
import AvailableTrainerCountView from "../views/available-trainer-count-view";
import { createNewSession, mySessionsListener } from '../../../../utils/manage-sessions';
import globalContext from "../../../../global-state-manager/global-context";

const AvailableTrainersListController = props => {
   const GlobalContext = useContext(globalContext)
   const [count, setCount] = useState(0)
   const [sessionPending, setSessionPending] = useState(false)



   useEffect(() => {
      if (GlobalContext.userProfile._uid) {
         //TODO:::: change name as a listener
         const myUID = GlobalContext.userProfile._uid;
         const isSeeker = GlobalContext.userProfile.isSeeker;

         return mySessionsListener({ isSeeker, uid: myUID, status: "pending" }, (x) => {
            setSessionPending(!!x);
         });

      }
   }, [GlobalContext.userProfile._uid]);
   useEffect(() => {
      trainersCountListener((n) => setCount(n))
   }, []);
   const handleRequestSession = () => {
      let seekerUID = GlobalContext.userProfile._uid;
      createNewSession(seekerUID);
   };

   return <div className="flex-col-center">
 
         <AvailableTrainerCountView trainerCount={count} />
         <div className="mt-2">
            <div className="flex-row-center ">
               <button disabled={sessionPending || count == 0} onClick={() => handleRequestSession()}>Request a Session</button>
            </div>
           <div className="gray mt-1"> {sessionPending ? "You have a request pending for a session." : ""}</div>
         </div>
     
   </div>
}

export default AvailableTrainersListController;