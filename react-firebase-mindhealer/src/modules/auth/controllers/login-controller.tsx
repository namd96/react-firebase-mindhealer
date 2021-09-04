import React, { useState } from "react";
import useSignIn from "../../../hooks/use-sign-in";
import LoginView from "../views/login-view";

const LoginController = props => {
   const [signIn, setSignIn] =  useSignIn({})        
  const [loginPayload, setLoginPayload] = useState({
      user_name: "",
      user_type: "",
      availability: true,
      preference: "picky",
      status: "offline"
  })
  
    const handleInputChange = (event) => {
        setLoginPayload({
            ...loginPayload,
            [event.target.name] : event.target.value
        });
    }
    const handleSubmitLoginForm = () => {
        console.log(loginPayload);
        setSignIn(loginPayload)
    }
    return <LoginView handleSubmitLoginForm={handleSubmitLoginForm} handleInputChange={handleInputChange}/>
}

export default LoginController;