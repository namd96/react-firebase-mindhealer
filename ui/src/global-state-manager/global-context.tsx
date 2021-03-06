import React from 'react';

export default React.createContext({
    loggedIn:false,
    userProfile: {
        type: "seeker", // trainer
        name: 'Unknown',
        _id:'',   // profile id
        _uid: '' ,// auth user id
        mode:'picky',//auto only for trainer
        isSeeker: true,
        availability: true
    },
    setUserProfile: (detailsObj) => { },
    setAuth: (loggedIn) => { }
})