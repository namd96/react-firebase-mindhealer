import React, { useEffect, useState } from "react";
import { getAvailableTrainers } from "../../../../utils/get-available-trainers";
import PendingSessionRequestsController from "../../../trainer/pending-session-requests/controllers/pending-session-requests-controller";
import AvailableTrainerListView from "../views/available-trainer-list-view";

const AvailableTrainersListController = props => {
const [listofTrainers,setListOfTrainers ] = useState([])
useEffect(()=>{
  getAvailableTrainers((listofTrainers)=>setListOfTrainers(listofTrainers))
},[])
   return <div>
  Trainer:
     <PendingSessionRequestsController />
     <br/>
     <br/>
  Seeker:
     <AvailableTrainerListView listofTrainers={listofTrainers}/>
    </div>
}

export default AvailableTrainersListController;