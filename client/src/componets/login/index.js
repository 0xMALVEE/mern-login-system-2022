import React from "react";
import LoginStyles from "./Login.module.css"

function Login() {
    return (
        <div className={LoginStyles.loginContainer}>
            <div>
                <h3>Welcome back</h3>

                <div className={LoginStyles.inputContainer}>
                    <label>EMAIL</label>
                    <input placeholder="enter your email" type="email"/>
                </div>

                <div className={LoginStyles.inputContainer}>
                    <label>PASSWORD</label>
                    <input placeholder="enter your password" type="password"/>
                </div>

                <button className={LoginStyles.loginBTN}>LOGIN</button>
            </div>

        </div>
    )
}

export default Login;