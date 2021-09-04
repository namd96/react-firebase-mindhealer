import React, { useEffect, useState } from "react";
import { getAllSessions } from "../../../../utils/manage-sessions";

const PendingSessionRequestsController = props => {
 const [pendingSessions, setPendingSessions] = useState([])
    useEffect(()=>{
    getAllSessions((sessions)=>setPendingSessions(sessions))
        

},[])
console.log("pendingSessions", pendingSessions);
   return <div>
       {
          pendingSessions.length ? pendingSessions.map(sess=>{
              return <div>{sess.seeker_id}</div>
          })  : <div>
              No Requests as of now
          </div>
       }
    </div>
}
export default PendingSessionRequestsController;