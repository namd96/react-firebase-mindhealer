import React, { useContext, useEffect, useState } from "react";
import { trainersCountListener } from "../../../../utils/get-available-trainers-count";
import PendingSessionRequestsController from "../../../trainer/pending-session-requests/controllers/pending-session-requests-controller";
import AvailableTrainerCountView from "../views/available-trainer-count-view";
import { createNewSession } from '../../../../utils/manage-sessions';
import globalContext from "../../../../global-state-manager/global-context";

const AvailableTrainersListController = props => {
   const GlobalContext = useContext(globalContext)
   const [count, setCount] = useState(0)
   useEffect(() => {
      //TODO:::: change name as a listener
      trainersCountListener((n) => setCount(n))
   }, []);
   const handleRequestSession = () => {
      let seekerUID = GlobalContext.userProfile._uid;
      createNewSession(seekerUID);
   };
   return <div>
      <AvailableTrainerCountView trainerCount={count} />
      <div>
         <button onClick={() => handleRequestSession()}>Request a Session</button>
      </div>
   </div>
}

export default AvailableTrainersListController;