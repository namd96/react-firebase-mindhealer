import React, { useContext, useEffect, useState } from "react";
import { mySessionsListener ,updateTrainer, endSession} from '../../../utils/manage-sessions';
import globalContext from "../../../global-state-manager/global-context";
import LiveView from "../views/live";


const LiveSessionCtrl = props => {
   const GlobalContext = useContext(globalContext);
   const isSeeker =GlobalContext.userProfile.type =='seeker';
   const myUID =GlobalContext.userProfile._uid;
   const myID =GlobalContext.userProfile._id;
   const [session, setSession] = useState(false);
   const [currTimeMs, setCurrTime] = useState(new Date().getTime());
   
    useEffect(() => {
        if(!session) return;
        let interval =setInterval(()=>{
            setCurrTime(new Date().getTime())
        },1000)
        return ()=>{
          clearInterval(interval)
        }
    },[session]);
    useEffect(() => {
      //TODO:::: change name as a listener
      mySessionsListener(isSeeker,myUID,(x) =>{
           setSession(x)
        });
   }, []);
   const handleLeaveSession = () => {
       if(GlobalContext.userProfile.type=='seeker'){
           let seekerUID = GlobalContext.userProfile._uid;
           
       }
   };
   const handleEndSession = () => {
    // let trainerUID = GlobalContext.userProfile._uid;
    if(!isSeeker){
        let trainerID = myID;
        endSession(session);
        updateTrainer(trainerID, true);
    }
}

const convertTimerSecondsInReadableFormat = seconds => {
let minutesToDisplay =Math.round(seconds/60);
let secondsToDisaplay = Math.round(seconds%60);

return `${minutesToDisplay}m ${secondsToDisaplay}s`
}
console.log('[mySession]',session);
let sessionStartedOn =  session?.started_on?.seconds*1000;
let timer = sessionStartedOn? currTimeMs - sessionStartedOn:0;
timer = timer/(1000);
timer = convertTimerSecondsInReadableFormat(timer)

   return <div>
       <LiveView session={session} timer={timer} handleLeaveSession={handleLeaveSession} sessionStartedOn={sessionStartedOn} handleEndSession={handleEndSession}/>
   </div>
}

export default LiveSessionCtrl;