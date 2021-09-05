import React from 'react';

interface IAvailableTrainerListView {
  trainerCount: Number
}
const AvailableTrainerCountView = (props: IAvailableTrainerListView) => {
  let { trainerCount } = props;
  // maybe we will show list of trainers here
  return <div className="flex-row-center">
    
      {
      <div className="flex-col-center">   <h1> {trainerCount} </h1> (available trainers) </div>
        || <>
         Sorry, No Trainers Available Right Now
        </>
      }

  </div>
}

export default AvailableTrainerCountView