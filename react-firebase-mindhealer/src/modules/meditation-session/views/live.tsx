import React, { useContext } from "react"
import globalContext from "../../../global-state-manager/global-context";
interface ILiveView {
    session, timer, sessionStartedOn, handleEndSession
}
const LiveView = (props:ILiveView) => {
    const GlobalContext = useContext(globalContext)
    let {session, timer, sessionStartedOn, handleEndSession} = props;
    return <>
     <div>
         {session? <div> 
             <h1>{timer} </h1>
             <div>
              SESSION ONGOING,
             </div>
             <div>
                REQD ON:  {new Date(session.requested_on.seconds*1000).toLocaleString()}
             </div>
             <div>
                STARTED ON:  {new Date(sessionStartedOn).toLocaleString()}
             </div>
             {!GlobalContext.userProfile.isSeeker
             ?<button onClick={handleEndSession}>
                 END now
             </button>:''}
              </div> :<> no live session going on </>}
      </div>
    </>
}

export default LiveView