import React, { useContext, useState } from 'react'
import globalContext from '../src/global-state-manager/global-context'
// import LoginController from '../src/modules/auth/controllers/login-controller'
import LoginController from '../src/modules/auth-by-pw/controller'
import AvailableTrainers from '../src/modules/seeker/available-trainers-list/controllers/available-trainers-count-controller'
import PendingSessionRequestsController from '../src/modules/trainer/pending-session-requests/controllers/pending-session-requests-controller'
import styles from '../styles/Home.module.css'
import LiveSession from '../src/modules/meditation-session/controllers/live'
import TrainerHome from '../src/modules/trainer/home'
import SeekerHome from '../src/modules/seeker/home'
export default function ListOfUsers() {
  const GlobalContext = useContext(globalContext);
  const [sessionActive, setSessionActive] = useState(false)
const onSessionActive = (value) => {
  setSessionActive(value)
}

  return (

    <div className={styles.container}>
      {!GlobalContext.loggedIn
        ? <LoginController />
        : <>
         <LiveSession onSessionActive = {onSessionActive}></LiveSession>
       {sessionActive ? "" :<>  {GlobalContext.userProfile.isSeeker
          ? <SeekerHome />
          : <TrainerHome  sessionActive={sessionActive}/>} </>}
          </>}
    </div>
  )
}
