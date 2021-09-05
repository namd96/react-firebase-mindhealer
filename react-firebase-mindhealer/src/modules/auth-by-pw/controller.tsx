import React, { useState } from "react";
import useSignIn from "../../hooks/use-sign-in-by-pw";
import View from "./view";

const LoginController = props => {
    const [signIn, setSignIn] = useSignIn(null)
    const [loginPayload, setLoginPayload] = useState({
        un: "",
        pw: ""
    })
    const handleInputChange = (event) => {
        setLoginPayload({
            ...loginPayload,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmitLoginForm = () => {
        console.log('loginPayload',loginPayload);
        setSignIn(loginPayload)
    }
    return <View handleSubmitLoginForm={handleSubmitLoginForm} handleInputChange={handleInputChange} />
}

export default LoginController;