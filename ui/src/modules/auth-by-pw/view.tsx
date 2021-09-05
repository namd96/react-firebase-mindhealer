import React, { useState } from "react";
import DullButton from "../../components/buttons/dull-button";
import HappyButton from "../../components/buttons/happy-button";

const SignIn = props => {

    return <div>
         <div className="flex-col-center">
         <input className = "mt-2" onChange={props.handleInputChange} type="text" name="un" placeholder="email"/>
         <input className = "mt-2" onChange={props.handleInputChange} type="text" name="pw" placeholder="password"/>
  
       <div className="mt-2">
             <HappyButton onClickHandler={props.handleSubmitLoginForm}>Sign In</HappyButton>
           </div>
         </div>
    </div>

}

export default SignIn;