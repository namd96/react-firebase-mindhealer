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
             <div className="gray small-text">
                REQD ON:  {new Date(session.requested_on.seconds*1000).toLocaleString()}
             </div>
             <div className="gray small-text">
                STARTED ON:  {new Date(sessionStartedOn).toLocaleString()}
             </div>
             {!GlobalContext.userProfile.isSeeker
             ?<button onClick={handleEndSession} className="mt-2">
                 END now
             </button>:''}
              </div> :<span className="gray large-text"> No live session going on </span>}
      </div>
    </>
}

export default LiveView