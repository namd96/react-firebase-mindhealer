import { useContext } from 'react'
import globalContext from '../src/global-state-manager/global-context'
// import LoginController from '../src/modules/auth/controllers/login-controller'
import LoginController from '../src/modules/auth-by-pw/controller'
import AvailableTrainers from '../src/modules/seeker/available-trainers-list/controllers/available-trainers-count-controller'
import PendingSessionRequestsController from '../src/modules/trainer/pending-session-requests/controllers/pending-session-requests-controller'
import styles from '../styles/Home.module.css'
import LiveSession from '../src/modules/meditation-session/controllers/live'
export default function ListOfUsers() {
  const GlobalContext = useContext(globalContext)
  return (

    <div className={styles.container}>
      {!GlobalContext.userDetails.isLoggedIn
        ? <LoginController />
        : <>
         <LiveSession></LiveSession>
         {GlobalContext.userDetails?.type == "seeker"
          ? <AvailableTrainers />
          : <PendingSessionRequestsController />} 
          </>}
    </div>
  )
}
