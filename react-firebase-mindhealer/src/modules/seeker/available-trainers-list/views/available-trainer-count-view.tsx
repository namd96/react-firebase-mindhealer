import React from 'react';

interface IAvailableTrainerListView {
  trainerCount: Number
}
const AvailableTrainerCountView = (props: IAvailableTrainerListView) => {
  let { trainerCount } = props;
  // maybe we will show list of trainers here
  return <div>
    
      {
         <h1> {trainerCount} </h1>
        || <>
          Sorry, No Trainers Available Right Now
        </>
      }

  </div>
}

export default AvailableTrainerCountView