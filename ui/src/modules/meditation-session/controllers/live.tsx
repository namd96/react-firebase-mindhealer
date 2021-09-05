import React, { useContext, useEffect, useState } from "react";
import { mySessionsListener, endSession } from '../../../utils/manage-sessions';
import globalContext from "../../../global-state-manager/global-context";
import LiveView from "../views/live";
import { updateTrainer } from "../../../utils/manage-users";


const LiveSessionCtrl = props => {
    const GlobalContext = useContext(globalContext);
    const [session, setSession] = useState(false);
    const [currTimeMs, setCurrTime] = useState(new Date().getTime());

    useEffect(() => {
        props.onSessionActive(!!session)
        if (!session) return;
        setCurrTime(new Date().getTime())
        let interval = setInterval(() => {
            setCurrTime(new Date().getTime())
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [session]);
    useEffect(() => {
        if (GlobalContext.userProfile._uid) {
            //TODO:::: change name as a listener
            const myUID = GlobalContext.userProfile._uid;
            const isSeeker = GlobalContext.userProfile.isSeeker;

            return mySessionsListener({isSeeker, uid:myUID}, (x) => {
                setSession(x);
            });
           
        }
    }, [GlobalContext.userProfile._uid]);

    const handleEndSession = () => {
        // let trainerUID = GlobalContext.userProfile._uid;
        if (!GlobalContext.userProfile.isSeeker) {
            const myID = GlobalContext.userProfile._id;
            let trainerID = myID;
            endSession(session);
            updateTrainer(trainerID, true);
        }
    }

    const convertTimerSecondsInReadableFormat = seconds => {
        let minutesToDisplay = Math.round(seconds / 60);
        let secondsToDisaplay = Math.round(seconds % 60);

        return `${minutesToDisplay}m ${secondsToDisaplay}s`
    }
    let sessionStartedOn = session?.started_on?.seconds * 1000;
    let timer = sessionStartedOn ? currTimeMs - sessionStartedOn : 0;
    timer = timer / (1000);
    timer = convertTimerSecondsInReadableFormat(timer)

    return <div>
        <LiveView session={session} timer={timer} sessionStartedOn={sessionStartedOn} handleEndSession={handleEndSession} />
    </div>
}

export default LiveSessionCtrl;