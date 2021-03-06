import React, { useContext, useEffect, useState } from "react";
import globalContext from "../../../../global-state-manager/global-context";
import { allSessionsListener, updateSession } from "../../../../utils/manage-sessions";
import { updateTrainer } from "../../../../utils/manage-users";

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
    return <div>
        {
            pendingSessions.length ? pendingSessions.map((sess, idx) => {
                return <div key={idx} className="mt-1">
                     {/* {(idx + 1)}  */}
                     <button onClick={() => handleJoinSession(sess)}>
                        Join Now 
                    </button>
                    &nbsp;
                    <span>
                     Session - {new Date(sess.requested_on.seconds*1000).toLocaleString()}
                    </span> &nbsp;
                </div>
            }) : <div className="primary-text gray">
                No Session Requests as of now
            </div>
        }
    </div>
}
export default PendingSessionRequestsController;