import React, { useContext, useState } from "react";
import globalContext from "../../../global-state-manager/global-context";
import { updateTrainer } from "../../../utils/manage-users";
import PendingSessionRequestsController from "../pending-session-requests/controllers/pending-session-requests-controller";

const TrainerHome = props => {
    const GlobalContext = useContext(globalContext)
    const [isAvailable, setIsAvailable] = useState(GlobalContext.userProfile.availability)
    const handleAvailabilityChange = (e) => {
        let value = e.target.checked
        setIsAvailable(value);
        updateTrainer(GlobalContext.userProfile._id, value)
    }

    return <div>
       {!isAvailable ? "You are offline" : <PendingSessionRequestsController />}
    {!props.sessionActive ?  <>  <input onChange={handleAvailabilityChange} type="checkbox" id="offline"
            checked={isAvailable} />
       Go {isAvailable ? " Offline" : " Online"} </> : ""}
    </div>
}
export default TrainerHome;