import React, { useContext, useEffect, useState } from "react";
import globalContext from "../../../../global-state-manager/global-context";
import { allSessionsListener, updateSession, updateTrainer } from "../../../../utils/manage-sessions";

const PendingSessionRequestsController = props => {
    const GlobalContext = useContext(globalContext)
    const [pendingSessions, setPendingSessions] = useState([])
    useEffect(() => {
        allSessionsListener((sessions) => setPendingSessions(sessions))
    }, []);

    const startSession = (session, trainer) => {

    };
    const handleJoinSession = (session) => {
        let trainerUID = GlobalContext.userProfile._uid;
        let trainerID = GlobalContext.userProfile._id;
        updateSession(session, trainerUID);
        updateTrainer(trainerID, false);
        //startSession(session, { trainerID, trainerUID });
    }
    console.log("pendingSessions", pendingSessions);
    return <div>
        {
            pendingSessions.length ? pendingSessions.map((sess, idx) => {
                return <div key={idx}>
                     #{(idx + 1)} -
                     <button onClick={() => handleJoinSession(sess)}>
                        Join Now {idx+1}
                    </button>
                    &nbsp;
                    <span>
                     Session - {new Date(sess.requested_on.nanoseconds).toDateString()}
                    </span> &nbsp;
                </div>
            }) : <div>
                No Session Requests as of now
            </div>
        }
    </div>
}
export default PendingSessionRequestsController;