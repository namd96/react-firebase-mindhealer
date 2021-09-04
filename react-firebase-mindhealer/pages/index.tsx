import { useContext } from 'react'
import globalContext from '../src/global-state-manager/global-context'
import AvailableTrainers from '../src/modules/seeker/available-trainers-list/controllers/available-trainers-list-controller'
import PendingSessionRequestsController from '../src/modules/trainer/pending-session-requests/controllers/pending-session-requests-controller'
import styles from '../styles/Home.module.css'

export default function ListOfUsers() {
const GlobalContext =  useContext(globalContext)
return (
    <div className={styles.container}>
    { GlobalContext.userType=="seekers" ? <AvailableTrainers /> : <PendingSessionRequestsController />}
  </div>
  )
}
