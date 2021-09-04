import React from 'react';
import { createNewSession } from '../../../../utils/manage-sessions';

interface IAvailableTrainerListView {
    listofTrainers: any[]
}
const AvailableTrainerListView =  (props:IAvailableTrainerListView) => {
  let {listofTrainers} = props;
  const handleRequestSession = () => {
    createNewSession();
  }
  return <div>
      <ul>
        <button onClick={()=>handleRequestSession()}>Request a Session</button>
        {
          listofTrainers.length ?  listofTrainers?.map((trainer, idx) => {
                return <li>{trainer?.first}</li>  
            }) : <> No Trainers Available right now
             </>
        }
      </ul>
    </div>
}

export default AvailableTrainerListView