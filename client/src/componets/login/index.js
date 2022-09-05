import React from "react";
import LoginStyles from "./Login.module.css"

function Login() {
    return (
        <div className={LoginStyles.loginContainer}>
            <div className={LoginStyles.loginContainerv2}>
                <h1>Welcome back</h1>

                <div className={LoginStyles.inputContainer}>
                    <label>EMAIL</label>
                    <input placeholder="enter your email" type="email"/>
                </div>

                <div className={LoginStyles.inputContainer}>
                    <label>PASSWORD</label>
                    <input placeholder="enter your password" type="password"/>
                </div>

                <button className={LoginStyles.loginBTN}>LOGIN</button>
                 <span className={LoginStyles.or}>or</span>
                 <button className={LoginStyles.googleBTN}>
                    <i class="fa-brands fa-google"></i>  Sign in with google</button>
            </div>

        </div>
    )
}

export default Login;