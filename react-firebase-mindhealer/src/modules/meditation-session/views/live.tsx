import ReactṆ, { useContext } from "react"
import globalContext from "../../../global-state-manager/global-context";
interface ILiveView {
    session, timer, sessionStartedOn, handleEndSession, handleLeaveSession
}
const LiveView = (props:ILiveView) => {
    const GlobalContext = useContext(globalContext)
    let {session, timer, sessionStartedOn, handleEndSession, handleLeaveSession} = props;
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
             {GlobalContext.userProfile.type=='trainer'
             ?<button onClick={handleEndSession}>
                 END now
             </button>:''}
              </div> :<> no live session going on </>}
      </div>
    </>
}

export default LiveView