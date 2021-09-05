import React, { useState } from "react";

const SignIn = props => {

    return <div>
         <div className="flex-col-center">
         <input onChange={props.handleInputChange} type="text" name="un" placeholder="email"/>
         <input onChange={props.handleInputChange} type="text" name="pw" placeholder="password"/>
  
         <button onClick={props.handleSubmitLoginForm}>Sign In</button>
         </div>
    </div>

}

export default SignIn;