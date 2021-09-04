import React from "react";
const LoginView = props => {
    let {handleInputChange, handleSubmitLoginForm} = props;
    return <>

    <div className="flex-col-center">
   <br/>
    Login
   <br/>
   <br/>
    <input onChange={handleInputChange} type="text" name="user_name"/>
   {/* <br/> */}
    {/* <input  onChange={handleInputChange} type="text" name="last"/> */}
   <br/>
   <div className="flex-row-center">
        <input  onChange={handleInputChange} type="radio" id="css" name="user_type" value="seekers"/>
        <label>Seeker</label><br/>
        <input  onChange={handleInputChange} type="radio" id="javascript" name="user_type" value="trainers"/>
        <label>Trainer</label>
    </div> 
   <br/>
    <button onClick={handleSubmitLoginForm}>Login</button>
   </div>
    </>
}

export default LoginView;